import styled from "styled-components";

export const StyledLatter = styled.div`
    background-color: ${({ theme }) => `var(--m3--sys--${theme.type}--inverse-on-surface)`};
    outline: ${({ theme }) => `var(--m3--sys--${theme.type}--outline-variant)`} solid 1px;
    width: 360px;
    height: 480px;
    margin: 30px;
    border-radius: 12px;
    .header{
        height: 48px;
        padding-top:12px;
        padding-bottom: 12px;
        padding-left: 16px;
        padding-right: 4px;
        display: flex;
        flex-direction: row;
        .icon-button{
            width: 48px;
            font-size: 0px;
            height: 48px;
            color: ${({ theme }) => `var(--m3--sys--${theme.type}--on-surface-variant)`};
            svg{
                margin-top: 12px;
                margin-left: 12px;
            }
        }
        .content{
            width: 292px;
            flex: 1;
            display: flex;
            justify-content: space-between;
            .monogram{
                background-color: ${({ theme }) => `var(--m3--sys--${theme.type}--primary)`};
                width: 40px;
                font-size: 0px;
                height: 40px;
                margin-top: 4px;
                border-radius: 50%;
                color: ${({ theme }) => `var(--m3--sys--${theme.type}--inverse-on-surface)`};
                svg{
                    margin-top: 10px;
                    margin-left: 10px;
                }
            }
            .text{
                width: 236px;
                .text-header{
                    line-height: 24px;
                    color: ${({ theme }) => `var(--m3--sys--${theme.type}--on-surface)`};
                    font-weight: bold;
                    font-size: var(--m3--title--medium);
                    height: 24px;
                }
                .text-subhead{
                    line-height: 24px;
                    color: ${({ theme }) => `var(--m3--sys--${theme.type}--on-surface)`};
                    font-size: var(--m3--body--medium);
                    height: 24px;
                }
            }
        }
    }
    .media{
        height: 188px;
        background-color: blue;
    }
    .Textcontent{
        width: 100%;
        height:220px;
        background-color: red;
    }
`;