import { createGlobalStyle } from "styled-components";

export const Animations = createGlobalStyle`
    @keyframes FadeIn {
        0% {opacity: 0}
        100% {opacity: 1}
    }

    @keyframes FadeOut {
        0% {opacity: 1}
        100% {opacity: 0}
    }

    @keyframes rotate360 {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }

    @-webkit-keyframes swing-in-top-bck {
        0% {
            -webkit-transform: rotateX(70deg);
                    transform: rotateX(70deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0deg);
                    transform: rotateX(0deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 1;
        }
    }

    @keyframes swing-in-top-bck {
        0% {
            -webkit-transform: rotateX(70deg);
                    transform: rotateX(70deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0deg);
                    transform: rotateX(0deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 1;
        }
    }

    @-webkit-keyframes swing-out-top-bck {
        0% {
            -webkit-transform: rotateX(0deg);
                    transform: rotateX(0deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 1;
        }
        100% {
            -webkit-transform: rotateX(-100deg);
                    transform: rotateX(-100deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 0;
        }
    }
    @keyframes swing-out-top-bck {
        0% {
            -webkit-transform: rotateX(0deg);
                    transform: rotateX(0deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 1;
        }
        100% {
            -webkit-transform: rotateX(-100deg);
                    transform: rotateX(-100deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 0;
        }
    }
    /* background */
    /* @-webkit-keyframes kenburns-top {
        0% {
            -webkit-transform: scale(1) translateY(0);
                    transform: scale(1) translateY(0);
            -webkit-transform-origin: 50% 16%;
                    transform-origin: 50% 16%;
        }
        100% {
            -webkit-transform: scale(1.25) translateY(-15px);
                    transform: scale(1.25) translateY(-15px);
            -webkit-transform-origin: top;
                    transform-origin: top;
        }
    }
    @keyframes kenburns-top {
        0% {
            -webkit-transform: scale(1) translateY(0);
                    transform: scale(1) translateY(0);
            -webkit-transform-origin: 50% 16%;
                    transform-origin: 50% 16%;
        }
        100% {
            -webkit-transform: scale(1.25) translateY(-15px);
                    transform: scale(1.25) translateY(-15px);
                    backdrop-filter: blur(10px);
            -webkit-transform-origin: top;
                    transform-origin: top;
        }
    } */

    @keyframes background-transition {
        ${({ theme }) => {
        return theme.backgrounds.map((e, i) => {
            return `${i / (theme.backgrounds.length - 1) * 100}%{background: url(${e})} ${i / (theme.backgrounds.length - 1) * 100 + 90/(theme.backgrounds.length - 1)}%{background: url(${e})} `
        })
    }}
    }

`;