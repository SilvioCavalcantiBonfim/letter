import react from "react";
import styled from "styled-components";
import { IconClose, IconPenNib, IconRefresh } from "../../../icons";
import GenericalCard from "../../genericalCard";
import { StyledActions, StyledInput, StyledInputDesable, StyledModalLetter, StyledTextcontent, TextContentConteiner } from "./style"

const FormRegisterLetter = (props) => {
    const [currentTitle, setCurrentTitle] = react.useState('');
    const [pseudonyms, setPseudonyms] = react.useState(null);
    const [seedPseudonyms, setSeedPseudonyms] = react.useState(null);
    const [FocusInput, setFocusInput] = react.useState(0);

    react.useEffect(() => {
        seedPseudonyms !== null && getPseudonyms(seedPseudonyms);
    }, [seedPseudonyms]);


    const getPseudonyms = async (seed) => {
        await fetch('https://middleware-hazel.vercel.app/REQUEST', { headers: { endpoint: `http://randomuser.me/api?nat=uk,us,br&inc=name&seed=${seed}&noinfo` } }).then(async r => {
            const result = await r.json();
            setPseudonyms(`${result.results[0].name.title} ${result.results[0].name.first} ${result.results[0].name.last}`)
        })
    }

    react.useEffect(() => {
        if (localStorage.getItem('token') === null)
            localStorage.setItem('token', Math.random().toString(36).substring(2));
        setSeedPseudonyms(localStorage.getItem('token'));
    }, []);

    const updateSeed = (seed) => {
        localStorage.setItem('token', seed);
        setSeedPseudonyms(seed);
    }

    return (<form>
        <StyledModalLetter>
            <GenericalCard
                width={'90%'}
                header={{ title: ' ', monogram: <IconPenNib />, iconButton: <IconClose />, HandleHeaderButton: props.HandleCloseForm }}

                media={{
                    backgroundColor: "var(--m3--sys--light--on-surface-variant)", 
                    component: <div>
                        <img src="" alt="" height='188'/>
                        <input type='file' />
                    </div>
                }}
                textcontent={{
                    component: <TextContentConteiner>

                        <StyledInput
                            content='Titulo'
                            spaceBottom='10px'
                            clear={(currentTitle === '' && FocusInput === 0) ? 1 : 0}>
                            <input name="title" value={currentTitle} onFocus={() => setFocusInput(1)} onBlur={() => setFocusInput(0)} onChange={(e) => setCurrentTitle(e.target.value)} />
                        </StyledInput>

                        <StyledInputDesable content='autor(a)' spaceBottom='32px'>
                            <input name="title" defaultValue={pseudonyms} disabled />
                            <button className="buttonInput" type="button" onClick={() => updateSeed(Math.random().toString(36).substring(2))}><IconRefresh /></button>
                        </StyledInputDesable>
                        <StyledTextcontent>
                            <textarea />
                        </StyledTextcontent>
                    </TextContentConteiner>
                }}
                actions={{ component: <StyledActions><input type="submit" value="Salvar" /></StyledActions> }}
            />

        </StyledModalLetter>
    </form>);
}

export default FormRegisterLetter;