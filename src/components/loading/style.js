import styled from "styled-components";

export const StyledLoading = styled.div`
    .ldio-cmlfw0gne0o div { position: absolute; width: 30px;box-shadow: var(--m3---elevation--${({ theme }) => ['light', 'dark'][theme.theme]}--2); }.ldio-cmlfw0gne0o div:nth-child(1) {
        left: 35px;
        background: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-primary-container);
        animation: ldio-cmlfw0gne0o-1 1s cubic-bezier(0,0.5,0.5,1) infinite;
        animation-delay: -0.2s
    }
    .ldio-cmlfw0gne0o div:nth-child(2) {
        left: 85px;
        background: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);
        animation: ldio-cmlfw0gne0o-2 1s cubic-bezier(0,0.5,0.5,1) infinite;
        animation-delay: -0.1s
    }
    .ldio-cmlfw0gne0o div:nth-child(3) {
        left: 135px;
        background: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary-container);
        animation: ldio-cmlfw0gne0o-3 1s cubic-bezier(0,0.5,0.5,1) infinite;
        animation-delay: undefineds
    }

    .loadingio-spinner-pulse-ax2929b8icg {
        width: 200px;
        height: 200px;
        position: absolute;
        top: calc(50vh - 100px);
        left: calc(50vw - 100px);
        display: inline-block;
        overflow: hidden;
        border-radius: 12px;
        outline: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--outline-variant) solid 1px;
        background: linear-gradient(120deg, var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface) 50%, transparent 100%);;
        backdrop-filter: blur(5px);
    }
    .ldio-cmlfw0gne0o {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }
    .ldio-cmlfw0gne0o div { box-sizing: content-box; }
`;