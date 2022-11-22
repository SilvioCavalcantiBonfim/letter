import styled from "styled-components";

export const StyledColorSelect = styled.div`
    display: flex;
    font-size: var(--m3--title--small);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .iconButtonSetting{
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 4px;
        svg{
            color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface);
            animation: ${({ display }) => (display === 'block') ? 'rotateGear 5s linear infinite' : 'none'};
        }
    }
    .conteinerSetting{
        position: relative;
        display: inline-block;
        left: -265px;
    }
    @keyframes rotateGear {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }

    .MenuColor{
        display: ${({ display }) => display};
        position: absolute;
        box-sizing: border-box;
        z-index: 1;
        width: 300px;
        padding: 10px 20px;
        opacity: 1;
        animation: showMenuColor .3s linear;
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface);
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
        box-shadow: var(--m3---elevation--${({theme}) => ['light','dark'][theme.theme]}--2);
        border-radius: 4px;
        .selectColorConteinerLinks{
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            .LinkIcon{
                color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
                box-sizing: border-box;
                padding: 9px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                cursor: pointer;
                &:hover{
                    background-color: var(--m3--state-layers--${({theme}) => ['light','dark'][theme.theme]}--primary--opacity-012);
                }
            }
        }
        .selectColorConteiner{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 44px;
            box-sizing: border-box;
            padding: 0px 4px;
            .title{
                flex: 1;
                font-size: var(--m3--title--medium);
                text-align: center;
            }
            .selectColorTitle{
                flex: 1;
                box-sizing: border-box;
                padding: 0px 4px;
                font-size:  var(--m3--title--small);
                color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface);
            }
            .ColorConteiner{
                flex: 1.5;
                display: flex;
                justify-content: space-between;
            }
            .selectColorButton{
                color: inherit;
            }
        } 
    }    
    @keyframes showMenuColor {
        0% {opacity: 0}
        100% {opacity: 1}
    }
`;

export const StyledColor = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    border: solid 2px var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface-variant);
    background-color: ${({color}) => `var(--m3--ref--${color}--primary40)`};
    box-shadow: var(--m3---elevation--${({theme}) => ['light','dark'][theme.theme]}--2);
    transition: background-color .1s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: ${({color}) => `var(--m3--ref--${color}--primary60)`};
    }
`;