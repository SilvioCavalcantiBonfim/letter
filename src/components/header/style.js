import styled from "styled-components";

export const StyledHeader = styled.div`
    background-color: ${({theme}) => `var(--m3--sys--${theme.type}--primary)`};
    color: ${({theme}) => `var(--m3--sys--${theme.type}--color--primary)`};
    box-shadow: ${({theme}) => `var(--m3---elevation--${theme.type}--1)`};
    font-size: 5rem;
    padding: 30px 30px;
    overflow: none;
    svg{
        width: 300px;
    }
`;