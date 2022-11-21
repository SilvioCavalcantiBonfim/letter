import react from "react";
import { IconGit, IconLinkedin, IconSetting, IconTwitter } from "../../icons";
import { ThemeModeContext } from "../../ThemeControl";
import { StyledColorSelect } from "./style";

const ColorSelect = () => {
    const ThemeMode = react.useContext(ThemeModeContext);
    const [Display, setDisplay] = react.useState(0);
    const box = react.useRef(null);

    react.useEffect(() => {
        window.addEventListener("click", (e) => {
            if(!box.current.contains(e.target))
                setDisplay(0);
        })
    }, []);

    return (<StyledColorSelect display={['none', 'block'][Display]} ref={box}>
        <button className="iconButtonSetting" onClick={() => setDisplay(v => 1 - v)} id="teste"><IconSetting id="teste" /></button>
        <div className="conteinerSetting" id="teste">
            <div className="MenuColor" id="teste">
                <div className="selectColor" id="teste">
                    <div className="Color1" onClick={() => ThemeMode.setColor('gold')} title="Ouro" id="teste" />
                    <div className="Color2" onClick={() => { ThemeMode.setColor('lavender') }} title="Lavanda" id="teste" />
                    <div className="Color3" onClick={() => ThemeMode.setColor('green')} title="Verde" id="teste" />
                    <div className="Color4" onClick={() => ThemeMode.setColor('pink')} title="Rosa" id="teste" />
                    <div className="Color5" onClick={() => ThemeMode.setColor('blue')} title="Azul" id="teste" />
                </div>
                <hr id="teste" />
                <div className="linkMenu" id="teste">
                    <a href="https://github.com/SilvioCavalcantiBonfim/letter" id="teste" target="_blank" title="Projeto GitHub"><IconGit /></a>
                    <a href={`https://www.linkedin.com/in/silvio-cavalcanti-1096768a`} id="teste" target="_blank" title="Contato do Dev"><IconLinkedin /></a>
                    <a href={`https://twitter.com/SilvioCBONFIM`} id="teste" target="_blank" title="Contato do Dev"><IconTwitter /></a>
                </div>
            </div>

        </div>
    </StyledColorSelect>);
}

export default ColorSelect;