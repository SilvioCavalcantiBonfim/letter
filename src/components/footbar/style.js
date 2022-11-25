import styled from "styled-components";


export const StyledFooter = styled.div`
    .footer1{
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        &>a{
            display: flex;
            width: 40px;
            height: 40px;
        }
    }
`;