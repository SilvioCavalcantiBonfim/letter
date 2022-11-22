import react from "react";
import styled from "styled-components";
import { IconClose, IconPenNib} from "../../../icons";
import GenericalCard from "../../genericalCard";
import { StyledModalLetter } from "./style"

const FormRegisterLetter = (props) => {
    const [currentTitle, setCurrentTitle] = react.useState("Nova carta");
    return (<form>
        <StyledModalLetter>
            <GenericalCard
                width={'90%'}
                header={{ title: currentTitle, subtitle: 'Gerador de psedonimos', monogram: <IconPenNib />, iconButton: <IconClose />, HandleHeaderButton: props.HandleCloseForm}}
                
                media={{ backgroundColor: "rgba(218,220,224,255)" }}
                textcontent={{title: <StyledInputTitle content='Titulo'><input name="title" value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)}/></StyledInputTitle>, component: <StyledTextcontent><textarea /></StyledTextcontent> }}
                actions={{ component: <StyledActions><input type="submit" value="Salvar" /></StyledActions> }}
            />

        </StyledModalLetter>
    </form>);
}

const StyledInputTitle = styled.div`
    position: relative;
    box-sizing: border-box;
    margin-bottom: ${({spaceBottom}) => spaceBottom};
    border: solid 2px var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
    padding: 8px 0px 8px 16px;
    border-radius: 4px;
    width: 25%;
    input{
        height: 24px;
        flex: 1;
        background-color: transparent;
    }
    &:after{
        content: ${({content}) => `'${content}'`};
        position: absolute;
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface);
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
        font-size: var(--m3--body--small);
        left: 12px;
        top: calc(-1 * (var(--m3--body--small) + 1.5px) / 2);
        padding: 0px 4px;
    }
`;

const StyledTextcontent = styled.div`
        flex: 1;
        position: relative;
        height: calc(98vh - 489px); 
        box-sizing: border-box;
        border: solid 2px var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
        padding: 8px 0px 8px 16px;
        border-radius: 4px;
        textarea{
            flex: 1;
            resize: none;
            background-color: inherit;
            font-family : inherit;
        }
        &:after{
            content: 'Texto';
            position: absolute;
            background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface);
            color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
            font-size: var(--m3--body--small);
            left: 12px;
            top: calc(-1 * (var(--m3--body--small) + 1.5px) / 2);
            padding: 0px 4px;
        }
`;

const StyledActions = styled.div`
    display: flex;
    flex: 1;
    justify-content: right;
    input{
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-primary);
        border-radius: 24px / 24px;
        padding: 10px 24px;
        cursor: pointer;
        transition: box-shadow .2s linear, filter .2s linear;
        &:hover{
            box-shadow: var(--m3---elevation--${({theme}) => ['light','dark'][theme.theme]}--1);
            filter: opacity(92%);
        }
    }
`;

export default FormRegisterLetter;