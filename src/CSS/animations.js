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
            return `${i / (theme.backgrounds.length - 1) * 100}%{background: url(${e})} ${i / (theme.backgrounds.length - 1) * 100 + 90 / (theme.backgrounds.length - 1)}%{background: url(${e})} `
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

    @keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 1;
        }
    }
    @keyframes scale-out-center {
        0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            opacity: 1;
        }
    }

    @keyframes blur-in {
        0% {
            backdrop-filter: blur(0px); 
            opacity: 0;
        }
        100% {
            backdrop-filter: blur(5px); 
            opacity: 1;
        }
    }

    @keyframes blur-out {
        0% {
            backdrop-filter: blur(5px); 
            opacity: 1;
        }
        100% {
            backdrop-filter: blur(0px); 
            opacity: 0;
        }
    }

    @keyframes buttonAnimation {
        0% {transform: rotate(0deg);}
        20% {transform: rotate(-20deg);}
        40% {transform: rotate(20deg);}
        60%{transform: rotate(0deg);}
    }
`;