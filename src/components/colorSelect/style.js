import styled from "styled-components";

export const StyledColorSelect = styled.div`
    display: flex;
    font-size: 0px;
    width: 200px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .conteinerSetting{
        position: relative;
        display: inline-block;
        left: -100px;
        
    }
    .iconButtonSetting{
        background-color: transparent;
        padding: 0;
        background-color: var(--m3--sys--light--primary);
        width: 44px;
        height: 44px;
        margin-bottom: 4px;
        border-radius: 50%;
        cursor: pointer;
        svg{
            transition: transform .3s;
            color: white;
            border-radius: 50%;
            padding: 9px;
            animation: ${({ display }) => (display === 'block')? 'rotateGear 5s linear infinite': 'none' };
        }
    }
    @keyframes rotateGear {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }

    .MenuColor{
        display: ${({ display }) => display};
        position: absolute;
        z-index: 1;
        width: 200px;
        height: max-content;
        opacity: 1;
        animation: showMenuColor .3s linear;
        background-color: var(--m3--surfaces--light--surface2);
        box-shadow: var(--m3---elevation--light--2);
        border-radius: 4px;
        color: var(--m3--sys--light--primary);
        .selectColor{
            width: auto;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            svg{
                width: auto;
            }
        }
        .linkMenu{
            width: auto;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            a{
                padding: 5px;
                border-radius: 50%;
                cursor: pointer;
                &:hover{
                    background-color: var(--m3--state-layers--light--primary--opacity-012);
                    color: var(--m3--ref--${({theme}) => theme.color}--primary60);
                }
                svg{
                    width: 24px;
                }
            }
        }
        
    }    

    @keyframes showMenuColor {
        0% {opacity: 0}
        100% {opacity: 1}
    }
    .Color1{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        border: solid 2px var(--m3--ref--gold--primary10);
        background-color: var(--m3--ref--gold--primary40);
        box-shadow: ${({ theme }) => `var(--m3---elevation--light--2)`};
        transition: background-color .1s;
        &:hover{
            background-color: var(--m3--ref--gold--primary60);
        }
    }
    .Color2{
        width: 24px;
        height: 24px;
        cursor: pointer;
        border-radius: 50%;
        border: solid 2px var(--m3--ref--${({ theme }) => theme.color}--primary10);
        background-color: var(--m3--ref--lavender--primary40);
        box-shadow: ${({ theme }) => `var(--m3---elevation--light--2)`};
        &:hover{
            background-color: var(--m3--ref--lavender--primary60);
        }
    }
    .Color3{
        width: 24px;
        height: 24px;
        cursor: pointer;
        border-radius: 50%;
        border: solid 2px var(--m3--ref--${({ theme }) => theme.color}--primary10);
        background-color: var(--m3--ref--green--primary40);
        box-shadow: ${({ theme }) => `var(--m3---elevation--light--2)`};
        &:hover{
            background-color: var(--m3--ref--green--primary60);
        }
    }
    .Color4{
        width: 24px;
        height: 24px;
        cursor: pointer;
        border-radius: 50%;
        border: solid 2px var(--m3--ref--${({ theme }) => theme.color}--primary10);
        background-color: var(--m3--ref--pink--primary40);
        box-shadow: ${({ theme }) => `var(--m3---elevation--light--2)`};
        &:hover{
            background-color: var(--m3--ref--pink--primary60);
        }
    }
`;