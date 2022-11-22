import styled from "styled-components";

export const StyledHeader = styled.div`
    color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--primary);
    background: linear-gradient(var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface),transparent);
    font-size: 5rem;
    padding: 30px 5%;
    width: 90%;
    overflow: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;