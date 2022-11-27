import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface);
    outline: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--outline-variant) solid 1px;
    color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface);
    width: ${({width}) => width};
    height: min-content;
    border-radius: 12px;
    .header{
        padding: 12px 4px 12px 16px;
        .content{
            display: flex;
            align-items: center;
            flex: 1;
            .monogram{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);
                color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-primary);
            }
            .contentText{
                flex: 1;
                flex-direction: column;
                padding-left: 16px;
                .textHeader{
                    font-size: var(--m3--title--medium);
                    font-weight: bold;
                    height: 24px;
                    align-items: center;
                    text-transform: capitalize;
                    display: flex;
                }
                .textSubhead{
                    font-size: var(--m3--body--medium);
                    font-style: italic;
                    height: 20px;
                    align-items: center;
                    text-transform: capitalize;
                    display: flex;
                }
            }
            .iconButtonContent{
                width: 48px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                .iconButton{
                    display: flex;
                    width: 40px;
                    color: inherit;
                    aspect-ratio: 1 / 1;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                    transition: transform .1s linear;
                    &:hover, &:focus{
                        background-color: var(--m3--state-layers--${({theme}) => ['light','dark'][theme.theme]}--primary--opacity-012);
                    }
                    &:focus{
                        transform: rotate(90deg);
                    }
                }
            }
        }
    }
    .media{
        display: flex;
        height: 188px;
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
        justify-content: center;
        .defualtMedia{
            height: 100%;
        }
    }
    .Textcontent{
        flex-direction: column;
        &>*{
            padding: 16px;
        }
        .supportingText{
            color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
            font-size: var(--m3--body--medium);
        }
    }
`;

export const StyledActions = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: right;
    button{
        border-radius: 12px;
        text-transform: capitalize;
        background-color: transparent;
        transition: box-shadow var(--animation--duration), background-color var(--animation--duration), color var(--animation--duration);
        cursor: pointer;
        svg{
            margin: 10px;
        }
        &:hover>svg{
            animation: buttonAnimation .9s linear;
        }
        &:hover{
            box-shadow: var(--m3---elevation--${({ theme }) => ['light', 'dark'][theme.theme]}--4);
        }
    }

    .button1{
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);
        margin-right: 8px;
        &:hover{
            background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--error-container);
            color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--error);
        }
    }
    .button2{
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);  
        &:hover{
            background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--success-container);
            color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--success);
        }
    }
`;

export const StyledConteiner = styled.div`
    width: min-content;
    .mini{
        margin: 30px;
        width: min-content;
        &>div{
            cursor: pointer;
        }
    }
    .focus{
        position: fixed;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        &>div{
            display: flex;
            justify-content: center;
        }
    }
    .in{
        animation: blur-in var(--animation--duration) var(--animation--timing--function);
        &>div{
            animation: scale-in-center var(--animation--duration) var(--animation--timing--function);
        }
    }
    .out{
        animation: blur-out var(--animation--duration) var(--animation--timing--function);
        &>div{
            animation: scale-out-center var(--animation--duration) var(--animation--timing--function);
        }
    }
`;

export const StyledTextContent = styled.div`
    font-style: italic;
    text-align: justify;
    text-justify: inter-word;
    flex-direction: column;
    overflow: auto;
    p{
        text-indent: 1.5em;
    }

`;

export const StyledOptions = styled.div`
    position: absolute;
    top: 44px;
    margin-top: 4px;
    left: -70px;
    
    .Options{
        display: ${({ StateOptionMenu }) => ["none", "inline-block", "inline-block"][StateOptionMenu]};
        opacity: ${({ StateOptionMenu }) => Number(StateOptionMenu !== 2)};
        box-shadow: var(--m3---elevation--${({ theme }) => ['light', 'dark'][theme.theme]}--2);
        background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface);
        border-radius: 4px;
        animation: none;
        &.an1{
            -webkit-animation: swing-in-top-bck var(--animation--duration) var(--animation--timing--function);
            animation: swing-in-top-bck  var(--animation--duration) var(--animation--timing--function);
        }   

        &.an2{
            -webkit-animation: swing-out-top-bck  var(--animation--duration) var(--animation--timing--function);
            animation: swing-out-top-bck  var(--animation--duration) var(--animation--timing--function);
        }
        .ShareButton{
            box-sizing: border-box;
            cursor: pointer;
            border-radius: 4px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            padding: 10px 12px;
            width: 150px;
            display: flex;
            align-items: center; 
            justify-content: space-evenly;
            color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface);
            font-size: var(--m3--body--medium);   
            &:hover{
                background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface-variant);
            }
        }
        .WarningButton{
            box-sizing: border-box;
            cursor: pointer;
            border-radius: 4px;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            padding: 10px 12px;
            width: 150px;
            display: flex;
            align-items: center; 
            justify-content: space-evenly;
            color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--error);
            font-size: var(--m3--body--medium);   
            &:hover{
                background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--error-container);
            }
        }
    }
`;