import styled from "styled-components";

export const StyledLatter = styled.div`
    background-color: ${({ theme }) => `var(--m3--sys--${theme.type}--inverse-on-surface)`};
    outline: ${({ theme }) => `var(--m3--sys--${theme.type}--outline-variant)`} solid 1px;
    width: 360px;
    height: 480px;
    margin: 30px;
    border-radius: 12px;
    transition: box-shadow .3s ease-in-out;
    box-shadow: ${({ theme }) => `var(--m3---elevation--${theme.type}--2)`};
    &:hover{
        box-shadow: ${({ theme }) => `var(--m3---elevation--${theme.type}--4)`};
    }
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
            background-color: transparent;
            color: ${({ theme }) => `var(--m3--sys--${theme.type}--on-surface-variant)`};
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
        background-image: url("data:image/png;base64,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8jx98Xt6+c6o+309VPF75vMbN/zegYYIaABmbv3xkzT58f6gbuqIB644cY6XowBtEdAAzM0QQjrCOaI5RjaMa0CbBDQAcxchvf7oUdra/jnVIkY0rl+75lo6QEAD0J+YkZ48eJC2traLPJWOE+arVz56Ec2XzTgDvxPQABQhTqPXHz/uPaZFM3Acw1sAFCFi9TBYd3Z/eRHU2799/dxdizcrEcwH/98Xu7cqimbgOE6gASje4RWPh18R1PHPck6qY/kvYnlp6b3u7Z/xtsmIZXd+A7mcQANQvHhVeHy9aYEvYvrw7vSI6hChvLBw7uDvz51zWwYwVf5EAaBqB7F88J8zp8nAPLybAACAExPQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQQUADAEAGAQ0AABkENAAAZBDQAACQ4f8BsaRbg+8z2CEAAAAASUVORK5CYII=");
        background-size: cover;
    }
    .Textcontent{
        width: 100%;
        height:220px;
        display: flex;
        flex-direction: column;
        .headline{
            width: 328px;
            height: 44px;
            margin: 16px;
            .title{
                width: 100%;
                height: 24px;
                line-height: 24px;
                font-size: var(--m3--body--large);
                color: ${({ theme }) => `var(--m3--sys--${theme.type}--on-surface)`};
            }
            .subhead{
                width: 100%;
                height: 20px;
                line-height: 20px;
                font-size: var(--m3--body--medium);
                color: ${({ theme }) => `var(--m3--sys--${theme.type}--on-surface-variant)`};
            }
        }
        .supporting-text{
            width: 328px;
            height: 44px;
            margin: 16px;
            color: ${({ theme }) => `var(--m3--sys--${theme.type}--on-surface-variant)`};
            font-size: var(--m3--body--medium);
            text-overflow: ellipsis;
        }
        .actions{
            margin: 16px;
            width: 328px;
            font-size: 0px;
            height: 44px;
            display: flex;
            justify-content: space-between;
            button{
                line-height:44px;
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
                    box-shadow: ${({ theme }) => `var(--m3---elevation--${theme.type}--4)`};
                }
                @keyframes buttonAnimation {
                    0% {transform: rotate(0deg);}
                    20% {transform: rotate(-20deg);}
                    40% {transform: rotate(20deg);}
                    60%{transform: rotate(0deg);}
                }
            }
            .button1{
                color: ${({ theme }) => `var(--m3--sys--${theme.type}--primary)`};
                margin-right: 8px;
                &:hover{
                    background-color: ${({ theme }) => `var(--m3--sys--${theme.type}--error-container)`};
                    color: ${({ theme }) => `var(--m3--sys--${theme.type}--error)`};
                }
            }
            .button2{
                color: ${({ theme }) => `var(--m3--sys--${theme.type}--primary)`};  
                &:hover{
                    background-color: ${({ theme }) => `var(--m3--sys--${theme.type}--success-container)`};
                    color: ${({ theme }) => `var(--m3--sys--${theme.type}--success)`};
                }
            }
        }
    }
`;