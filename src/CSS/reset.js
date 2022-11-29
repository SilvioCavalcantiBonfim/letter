import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
    #root, #__next {
        isolation: isolate;
    }
    html {
        font-size: ${({ theme }) => `${theme.fontSize}px`};
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface);
    }
    hr{
        border-top: solid 1px var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--outline-variant);
    }
    button{
        cursor: pointer;
        background-color: transparent;
    }
    a {
        all: unset;
    }
    
    * {
        padding: 0;
        margin: 0;
        border: none;
        vertical-align: baseline;
        list-style: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: background-color .1s linear;
    }
    *:focus{
        outline: none;
        border: none;
    }
`;