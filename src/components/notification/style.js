import styled from "styled-components";

export const StyledNotification = styled.div`
    width: 344px;
    height: 48px;
    padding: 0px;
    border-radius: 4px;
    display: flex;
    background-color: ${({type,theme}) => [`var(--m3--sys--${['light','dark'][theme.theme]}--error-container)`,`var(--m3--sys--${['light','dark'][theme.theme]}--success-container)`][type]};
    color: ${({type,theme}) => [`var(--m3--sys--${['light','dark'][theme.theme]}--error)`,`var(--m3--sys--${['light','dark'][theme.theme]}--success)`][type]};
    box-shadow: var(--m3---elevation--light--3);
    margin: 4px 0px;
    animation: ${({destroy}) => destroy? `destroyAnimation var(--animation--duration) linear`: `none`};
    position: relative;

    @keyframes destroyAnimation {
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

    .barTime{
        position: absolute;
        width: 0px;
        left: 48px;
        bottom: 0px;
        border-bottom-right-radius: 4px;
        background-color: ${({type,theme}) => [`var(--m3--sys--${['light','dark'][theme.theme]}--error)`,`var(--m3--sys--${['light','dark'][theme.theme]}--success)`][type]};
        height: 3px;
        animation: TimerExit 29.5s linear;
    }
    @keyframes TimerExit {
        0% {width: calc(100% - 48px); border-bottom-right-radius: 4px}
        1% {border-bottom-right-radius: 0px}
        100% {width: 0px}
    }
    .NotificationIcon{
        width: 48px;
        height: 48px;
        border-radius: 4px 0px 0px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({type,theme}) => [`var(--m3--sys--${['light','dark'][theme.theme]}--error)`,`var(--m3--sys--${['light','dark'][theme.theme]}--success)`][type]};
        color: ${({type,theme}) => [`var(--m3--sys--${['light','dark'][theme.theme]}--error-container)`,`var(--m3--sys--${['light','dark'][theme.theme]}--success-container)`][type]};
        svg{
            width: 24px;
            height: 24px;
        }
    }
    .NotificationText{
        font-size: var(--m3--body--medium);
        line-height: 20px;
        width: 240px;
        margin-left: 8px;
        padding: 14px 0px;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .closedButtonNotification{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: ${({type,theme}) => [`var(--m3--sys--${['light','dark'][theme.theme]}--error)`,`var(--m3--sys--${['light','dark'][theme.theme]}--success)`][type]};
        background-color: transparent;
        cursor: pointer;
        margin: 9px;
        &:hover{
            background-color: var(--m3--state-layers--${({theme}) => ['light','dark'][theme.theme]}--primary--opacity-012);
        }
    }
`;

export const StyledConteinerNotification = styled.div`
    display: inline-block;
`;