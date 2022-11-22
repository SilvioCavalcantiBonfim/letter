import styled from "styled-components";

export const StyledGenericalCard = styled.div`
    background-color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--surface);
    outline: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--outline-variant) solid 1px;
    color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface);
    min-width: 360px;
    height: min-content;
    max-width: 98vw;
    max-height: 98vh;
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
            color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
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
                &:hover, &:focus{
                    background-color: var(--m3--state-layers--${({theme}) => ['light','dark'][theme.theme]}--primary--opacity-012);
                }
            }
        }    
    }
    .media{
        height: 188px;
        background-color: ${({ media }) =>`${media.backgroundColor}` || `transparent`};
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
        .supporting-text{
            color: var(--m3--sys--${({theme}) => ['light','dark'][theme.theme]}--on-surface-variant);
            font-size: var(--m3--body--medium);
        }
    }
`;