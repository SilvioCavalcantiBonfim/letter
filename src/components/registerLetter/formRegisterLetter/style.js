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
    border: solid 2px var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);
    padding: 8px 0px 8px 16px;
    border-radius: 4px;
    height: calc(98vh - 532px);
    color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface);
    textarea{
        flex: 1;
        resize: none;
        background-color: inherit;
        font-family : inherit;
        height: 100%;
        color: inherit;
    }
    &:after{
        content: 'Corpo';
        text-transform: capitalize;
        position: absolute;
        background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface);
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);
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
    border: solid 2px var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);
    color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--on-surface);
    border-radius: 4px;
    width: 25%;
    height: 56px;
    input{
        height: 40px;
        padding-left: 16px;
        flex: 1;
        background-color: transparent;
        color: inherit;
    }
    &:after{
        content: ${({ content }) => `'${content}'`};
        text-transform: capitalize;
        position: absolute;
        background-color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--surface);
        color: var(--m3--sys--${({ theme }) => ['light', 'dark'][theme.theme]}--primary);
        font-size: ${({ clear }) => [`var(--m3--body--small)`, `var(--m3--body--large)`][clear]};
        transform:${({ clear }) => [`translateY(calc(-1 * (var(--m3--body--small) + 42px) / 2))`, `initial`][clear]};
        transition: font-size .1s linear, transform .1s linear;
        left: 12px;
        padding: 0px 4px;
    }
`;