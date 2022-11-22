import styled from "styled-components";

export const StyledSwitchTheme = styled.div`
    .moon-icon-light {
        stroke-dasharray: 0px 1px;
        opacity: 0;
        transition: stroke-dasharray .5s ease-in, opacity 300ms ease-in;
    }
    .sun-icon-light {
        stroke-dasharray: 1px 1px;
        opacity: 1;
        transition: stroke-dasharray .5s ease-in, opacity 300ms ease-in;
    }
    .moon-icon-dark {
        stroke-dasharray: 1px 1px;
        opacity: 1;
        transition: stroke-dasharray .5s ease-in, opacity 300ms ease-in;
    }
    .sun-icon-dark {
        stroke-dasharray: 0px 1px;
        opacity: 0;
        transition: stroke-dasharray .5s ease-in, opacity 300ms ease-in;
    }
`;