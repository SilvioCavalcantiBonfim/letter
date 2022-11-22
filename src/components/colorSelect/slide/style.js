import styled from "styled-components";

export const StyledSlide = styled.div`
    display: flex;
    position: relative;
    box-sizing: border-box;
    justify-content: center;
    align-items: end;
    .ConteinerSlide{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .slide{
        flex: 1;
        display: inline;
        -webkit-appearance: none;
        height: 4px;
        border-radius: 5px;
        width: 100%;
        background: linear-gradient(90deg, var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary) ${({value}) => `${value}%`}, var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface-variant) ${({value}) => `${value}%`});
    }
    .label{
        position: absolute;
        display: flex;
        justify-content: center;
        width: 24px;
        height: 28px;
        top: -20px;
        font-size: var(--m3--body--small);
        -webkit-mask-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='28' viewBox='0 0 28 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M14 34L4.1005 24.0416C-1.36684 18.5418 -1.36684 9.62475 4.1005 4.12489C9.56784 -1.37496 18.4322 -1.37496 23.8995 4.12489C29.3668 9.62475 29.3668 18.5418 23.8995 24.0416L14 34Z' fill='%236750A4'/%3e%3c/svg%3e "); 
        left: calc(${({value}) => `${value}% - ${value*0.2}px - 2px`});
        color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-primary);
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
        &>div{
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .slide::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
        cursor: pointer;
        box-shadow: var(--m3---elevation--${({theme}) => ['light','dark'][theme.theme]}--1);
        transition: background-color .3s ease-in-out;
        &:hover{
            outline: var(--m3--state-layers--${({theme}) => ['light','dark'][theme.theme]}--primary--opacity-008) 10px solid;
        }
        &:focus{
            outline: var(--m3--state-layers--${({theme}) => ['light','dark'][theme.theme]}--primary--opacity-012) 10px solid;
        }
    }
`;