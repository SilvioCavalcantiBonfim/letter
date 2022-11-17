import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`

    #root, #__next {
        isolation: isolate;
    }
    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: background-color .3s, fill .1s;
    }
    *:focus{
        outline: none;
        border: none;
    }
    body {
        font-size: 57px;
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => `var(--m3--sys--${theme.type}--surface)`};
    }
    hr{
        border-top: solid 1px var(--m3--sys--light--outline-variant);
        width: 90%;
        margin-left: 5%;
    }
    a {
        all: unset;
    }
`;