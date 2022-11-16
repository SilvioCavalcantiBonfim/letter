import styled from "styled-components";

export const StyledHeader = styled.div`
    color: ${({ theme }) => `var(--m3--sys--${theme.type}--color--primary)`};
    font-size: 5rem;
    padding: 30px 30px;
    overflow: none;
    svg{
        width: 300px;
    }
`;