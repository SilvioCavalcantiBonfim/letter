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


export const StyleConteiner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: url(${({background}) => background});
    background-attachment: fixed;
    background-size: 100% 100%;
    transition: background 1s var(--animation--timing--function);
    filter: ${({ theme }) => `${theme.theme === 1 && 'grayscale(100%)'}`} ;
`;