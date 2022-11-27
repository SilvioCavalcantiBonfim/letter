import styled from "styled-components";

export const StyledModalLetter = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .card{
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface);
        outline: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--outline-variant) solid 1px;
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface);
        min-width: 90%;
        height: min-content;
        width: ${({ width }) => width};
        border-radius: 12px;
        & *{
            display: flex;
            box-sizing: border-box;
        }
        .header{
            padding: 12px 4px 12px 16px;
            .content{
                flex: 1;
                align-items: center;
                .monogram{
                    width: 40px;
                    aspect-ratio: 1 / 1;
                    background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
                    border-radius: 50%;
                    color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-primary);
                    justify-content: center;
                    align-items: center;
                }
                .text{
                    flex: 1;
                    flex-direction: column;
                    padding-left: 16px;
                    
                    & *{
                        align-items: center;
                        text-transform: capitalize;
                    }
                    .text-header{
                        font-size: var(--m3--title--medium);
                        font-weight: bold;
                        height: 24px;
                        
                    }
                    .text-subhead{
                        font-size: var(--m3--body--medium);
                        font-style: italic;
                        height: 20px;
                    }
                }
            }
            .icon-button{
                width: 48px;
                height: 48px;
                align-items: center;
                justify-content: center;
                position: relative;
                .iconButton{
                    width: 40px;
                    color: inherit;
                    aspect-ratio: 1 / 1;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                    /* z-index: 0; */
                    &:hover, &:focus{
                        background-color: var(--m3--state-layers--${({theme}) => ['light','dark'][theme.theme]}--primary--opacity-012);
                    }
                }
            }    
        }
        .media{
            height: 188px;
            background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
            justify-content: center;
            position: relative;
            .hoverMedia{
                width: 360px;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                transition: backdrop-filter .3s linear;
                cursor: pointer;
                &>svg{
                    opacity: 0;
                    color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
                    transition: opacity .3s linear;
                }
                &:hover>svg{
                    opacity: 1;
                }
                &:hover{
                    backdrop-filter: blur(5px) grayscale(100%);
                }
            }
            .defualtMedia{
                width: 360px;
                height: 100%;
            }
            .ImageSelectInput{
                display: none;
            }
        }
        .Textcontent{
            display: flex;
            flex-direction: column;
            &>*{
                padding: 16px;
            }
            .supportingText{
                display: flex;
                flex-direction: column;
                width: 100%;
                color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
                font-size: var(--m3--body--medium);
            }
        }
    }
`;






export const TextContentConteiner = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
export const StyledActions = styled.div`
    display: flex;
    flex: 1;
    justify-content: right;
    input{
        background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-primary);
        border-radius: 24px / 24px;
        padding: 10px 24px;
        cursor: pointer;
        transition: box-shadow .2s linear, filter .2s linear;
        &:hover{
            box-shadow: var(--m3---elevation--${({ theme }) => ['light', 'dark'][theme.theme]}--1);
            filter: opacity(92%);
        }
    }
`;
export const StyledTextcontent = styled.div`
    position: relative;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: ${({ spaceBottom }) => spaceBottom};
    border: solid 2px var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--${({isvalid}) => ['error','primary'][isvalid]});
    padding: 8px 0px 8px 16px;
    border-radius: 4px;
    height: calc(98vh - 532px);
    color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface);
    animation: ${({isvalid}) => ['shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955)', 'none'][isvalid]};
    textarea{
        flex: 1;
        resize: none;
        background-color: inherit;
        font-family : inherit;
        height: 100%;
        color: inherit;
        caret-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--${({isvalid}) => ['error','primary'][isvalid]});
    }
    &:after{
        content: 'Corpo';
        text-transform: capitalize;
        position: absolute;
        background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface);
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--${({isvalid}) => ['error','primary'][isvalid]});
        font-size: var(--m3--body--small);
        transform: translateY(calc(-1*(98vh - 534px) / 2));
        left: 12px;
        padding: 0px 4px;
    }
`;
export const StyledInputDesable = styled.div`
    position: relative;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: ${({ spaceBottom }) => spaceBottom};
    border: solid 2px var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface-variant);
    border-radius: 4px;
    width: 25%;
    height: 56px;
    color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface);
    input{
        height: 40px;
        padding-left: 16px;
        flex: 1;
        color: inherit;
        background-color: transparent;
    }
    .buttonInput{
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        &>svg{
            /* background-color: transparent; */
            color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface);
            border-radius: 50%;
            outline: var(--m3--state-layers--${({ theme }) => ['light', 'dark'][theme.theme]}--primary--opacity-008) 0px solid;
            transition: outline .1s linear;
        }
        &:hover>svg{
            outline: var(--m3--state-layers--${({ theme }) => ['light', 'dark'][theme.theme]}--primary--opacity-008) 10px solid;
        }
    }
    &:after{
        content: ${({ content }) => `'${content}'`};
        text-transform: capitalize;
        position: absolute;
        background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface);
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface-variant);
        font-size: var(--m3--body--small);
        left: 12px;
        top: calc(-1 * (var(--m3--body--small) + 1.5px) / 2);
        padding: 0px 4px;
    }
`;
export const StyledInput = styled.div`
    position: relative;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: ${({ spaceBottom }) => spaceBottom};
    border: solid 2px var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--${({isvalid}) => ['error','primary'][isvalid]});
    color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface);
    border-radius: 4px;
    width: 25%;
    height: 56px;
    animation: ${({isvalid}) => ['shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955)', 'none'][isvalid]};
    input{
        height: 40px;
        padding-left: 16px;
        flex: 1;
        background-color: transparent;
        color: inherit;
        text-overflow: ellipsis;
        caret-color:  var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--${({isvalid}) => ['error','primary'][isvalid]});
    }
    .alert{
        width: 48px;
        height: 48px;
        display: ${({isvalid}) => ['flex', 'none'][isvalid]};
        align-items: center;
        justify-content: center;
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--error);
        &>svg{
            display: ${({isvalid}) => ['initial', 'none'][isvalid]};
        }
    }
    &:after{
        content: ${({ content }) => `'${content}'`};
        text-transform: capitalize;
        position: absolute;
        background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface);
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--${({isvalid}) => ['error','primary'][isvalid]});
        font-size: ${({ clear }) => [`var(--m3--body--small)`, `var(--m3--body--large)`][clear]};
        transform:${({ clear }) => [`translateY(calc(-1 * (var(--m3--body--small) + 42px) / 2))`, `initial`][clear]};
        transition: font-size .1s linear, transform .1s linear;
        left: 12px;
        padding: 0px 4px;
    }
`;