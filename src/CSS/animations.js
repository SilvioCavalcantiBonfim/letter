import { createGlobalStyle } from "styled-components";

export const Animations = createGlobalStyle`
    @keyframes FadeIn {
        0% {opacity: 0}
        100% {opacity: 1}
    }
    @keyframes rotate360 {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    @keyframes swing-in-top-bck {
        0% {
            transform: rotateX(70deg);
            transform-origin: top;
            opacity: 0;
        }
        100% {
            transform: rotateX(0deg);
            transform-origin: top;
            opacity: 1;
        }
    }
    @keyframes swing-out-top-bck {
        0% {
            transform: rotateX(0deg);
            transform-origin: top;
            opacity: 1;
        }
        100% {
            transform: rotateX(-100deg);
            transform-origin: top;
            opacity: 0;
        }
    }

    @keyframes destroyNotification {
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-1000px);
        }
    }

    @keyframes constroyNotification {
        0% {
            opacity: 0;
            transform: translateX(-1000px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes scale-in-center {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    @keyframes scale-out-center {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
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

    @keyframes shake-horizontal {
        0%,
        100% {transform: translateX(0);}
        10%,
        30%,
        50%,
        70% {transform: translateX(-10px);}
        20%,
        40%,
        60% {transform: translateX(10px);}
        80% {transform: translateX(8px);}
        90% {transform: translateX(-8px);}
    }
    @keyframes scale-in-br {
        0% {
            transform: scale(0);
            transform-origin: 100% 100%;
            opacity: 1;
        }
        100% {
            transform: scale(1);
            transform-origin: 100% 100%;
            opacity: 1;
        }
    }
    @keyframes scale-out-br {
        0% {
            transform: scale(1);
            transform-origin: 100% 100%;
            opacity: 1;
        }
        100% {
            transform: scale(0);
            transform-origin: 100% 100%;
            opacity: 1;
        }
    }
    @keyframes TimerExit {
        0% {width: calc(100% - 48px); border-bottom-right-radius: 4px}
        1% {border-bottom-right-radius: 0px}
        100% {width: 0px}
    }
    @keyframes ldio-cmlfw0gne0o-1 {
        0% { top: 36px; height: 128px }
        50% { top: 60px; height: 80px }
        100% { top: 60px; height: 80px }
    }
    @keyframes ldio-cmlfw0gne0o-2 {
        0% { top: 41.99999999999999px; height: 116.00000000000001px }
        50% { top: 60px; height: 80px }
        100% { top: 60px; height: 80px }
    }
    @keyframes ldio-cmlfw0gne0o-3 {
        0% { top: 48px; height: 104px }
        50% { top: 60px; height: 80px }
        100% { top: 60px; height: 80px }
    }
`;