import styled from "styled-components";

export const StyledHeader = styled.div`
    color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
    background: linear-gradient(120deg, var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface) 364px, transparent 50% 100%);
    background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface001);
    backdrop-filter: blur(5px);
    font-size: 5rem;
    padding: 30px 5%;
    width: 90%;
    overflow: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;