import styled from "styled-components";

export const StyledRegister = styled.div`
    position: fixed;
    right: 64px;
    bottom: 30px;
    .addLetterButton{
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
        box-shadow: var(--m3---elevation--light--2);
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-primary);
        border-radius: 12px;
        cursor: pointer;
        width: 55px;
        height: 55px;
    }
`;