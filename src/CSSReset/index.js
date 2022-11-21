import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
    #root, #__next {
        isolation: isolate;
    }
    html {
        font-size: 57px;
        line-height: 64 / 57;
        font-family: 'Roboto', sans-serif;
        background-color: var(--m3--sys--light--surface);
    }
    
    hr{
        border-top: solid 1px var(--m3--sys--light--outline-variant);
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
    }
    *:focus{
        outline: none;
        border: none;
    }
`;