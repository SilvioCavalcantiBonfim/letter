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


`;