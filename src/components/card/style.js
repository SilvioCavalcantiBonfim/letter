import styled from "styled-components";

export const StyledActions = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: right;
    button{
        border-radius: 12px;
        text-transform: capitalize;
        background-color: transparent;
        transition: box-shadow .3s, background-color .3s, color .3s;
        cursor: pointer;
        svg{
            margin: 10px;
        }
        &:hover>svg{
            animation: buttonAnimation .9s linear;
        }
        &:hover{
            box-shadow: var(--m3---elevation--light--4);
        }
        @keyframes buttonAnimation {
            0% {transform: rotate(0deg);}
            20% {transform: rotate(-20deg);}
            40% {transform: rotate(20deg);}
            60%{transform: rotate(0deg);}
        }
    }

    .button1{
        color: var(--m3--sys--light--primary);
        margin-right: 8px;
        &:hover{
            background-color: var(--m3--sys--light--error-container);
            color: var(--m3--sys--light--error);
        }
    }
    .button2{
        color: var(--m3--sys--light--primary);  
        &:hover{
            background-color: var(--m3--sys--light--success-container);
            color: var(--m3--sys--light--success);
        }
    }
`;

export const StyledConteiner = styled.div`
    width: min-content;
    @keyframes blur {
        0% {backdrop-filter: blur(0px); opacity: 0}
        100% {backdrop-filter: blur(5px); opacity: 1}
    }
    .mini{
        margin: 30px;
        width: min-content;
        &>div{
            cursor: pointer;
        }
    }
    .focus{
        position: fixed;
        background-color: var(--m3--sys--light--surface005);
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        animation: blur .3s linear forwards;
        &>div{
            display: flex;
            justify-content: center;
        }
    }
    @keyframes blurRev {
        0% {backdrop-filter: blur(5px); opacity: 1}
        100% {backdrop-filter: blur(0px); opacity: 0}
    }
    .out{
        position: fixed;
        background-color: var(--m3--sys--light--surface005);
        width: 100%;
        height: 100%;
        backdrop-filter: blur(0px);
        opacity: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        animation: blurRev .3s linear forwards;
        &>div{
            display: flex;
            justify-content: center;
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
    display: ${({ display }) => display};
    top: 44px;
    margin-top: 4px;
    left: -70px;
    .Options{
        box-shadow: var(--m3---elevation--light--2);
        background-color: var(--m3--sys--light--surface);
        border-radius: 4px;
        .WarningButton{
            box-sizing: border-box;
            cursor: pointer;
            border-radius: 4px;
            padding: 10px 24px;
            display: flex;
            align-items: center; 
            justify-content: space-evenly;
            color: var(--m3--sys--light--error);
            font-size: var(--m3--body--medium);   
        }
        &:hover{
            background-color: var(--m3--sys--light--error-container);
        }
    }
`;