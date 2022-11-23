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
        svg{
            color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-primary);
            animation: ${({ display }) => (display === 1) ? 'rotate360 5s linear infinite' : 'none'};
        }
    }
    .conteinerSetting{
        position: relative;
        display: inline-block;
        left: -265px;
    }

    .MenuColor{
        display: ${({ display }) => ['none','block', 'block'][display]};
        margin-top: 4px;
        position: absolute;
        box-sizing: border-box;
        z-index: 1;
        width: 300px;
        padding: 0px 20px;
        opacity: ${({ display }) => Number(display !== 2)};
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface);
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
        box-shadow: var(--m3---elevation--${({theme}) => ['light','dark'][theme.theme]}--2);
        border-radius: 4px;
        &.an1{
            -webkit-animation: swing-in-top-bck var(--animation--duration) cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	        animation: swing-in-top-bck  var(--animation--duration) cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
        }
        &.an2{
            -webkit-animation: swing-out-top-bck  var(--animation--duration) cubic-bezier(0.600, -0.280, 0.735, 0.045) both;
	        animation: swing-out-top-bck  var(--animation--duration) cubic-bezier(0.600, -0.280, 0.735, 0.045) both;
        }
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
            height: 55px;
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
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                color: inherit;
                &:hover{
                    background-color: var(--m3--state-layers--${({theme}) => ['light','dark'][theme.theme]}--primary--opacity-008);
                }
            }
        } 
    }
`;

export const StyledColor = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    border: solid 2px var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface-variant);
    background-color: ${({color,theme}) => `var(--m3--ref--${color}--primary${[4,6][theme.theme]}0)`};
    box-shadow: var(--m3---elevation--${({theme}) => ['light','dark'][theme.theme]}--2);
    transition: background-color .1s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: ${({color,theme}) => `var(--m3--ref--${color}--primary${[6,4][theme.theme]}0)`};
    }
`;