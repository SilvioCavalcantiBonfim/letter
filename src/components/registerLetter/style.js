import styled from "styled-components";

export const StyledRegister = styled.div`
    .addLetterConteiner{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .addLetterConteiner2{
        width: 90%;
        height: 100%;
        padding: 30px 5%;
        overflow: none;
        display: flex;
        justify-content: space-between;
        align-items: end;
        flex-wrap: wrap;
    }
    .addLetterButton{
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
        box-shadow: var(--m3---elevation--light--2);
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-primary);
        border-radius: 12px;
        cursor: pointer;
        width: 55px;
        height: 55px;
    }
    .addLetterConteinerButton{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;