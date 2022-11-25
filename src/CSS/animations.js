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

    @keyframes background-transition {
        ${({ theme }) => {
            return theme.backgrounds.map((e, i) => {
                return `${i / (theme.backgrounds.length - 1) * 100}%{background: url(${e})} ${i / (theme.backgrounds.length - 1) * 100 + 90/(theme.backgrounds.length - 1)}%{background: url(${e})} `
            })
        }}
    }

    @keyframes destroyNotification {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            opacity: 0;
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
        }
    }

    @keyframes constroyNotification {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }
`;