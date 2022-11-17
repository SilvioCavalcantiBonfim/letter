import react from "react";
import { StyledLatter } from "./style";


const LetterBox = (props) => {
    const [Hover, setHover] = react.useState(false);
    const [OptionsMenu, setOptionsMenu] = react.useState(0);
    const refOptions = react.useRef(null);

    react.useEffect(() => {
        window.addEventListener("click", (e) => {
            if(!refOptions.current.contains(e.target))
                setOptionsMenu(0);
        })
    }, []);

    return (<StyledLatter onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} display={[["none", "0deg"], ["inline-block", "90deg"]][OptionsMenu]}>
        <div className="header">
            <div className="content">
                <div className="monogram">{!Hover? <IconLetter />: <IconLetterOpen />}</div>
                <div className="text">
                    <div className="text-header">header</div>
                    <div className="text-subhead">Subhead</div>
                </div>
            </div>
            <div className="icon-button" ref={refOptions}>
                <button onClick={() => setOptionsMenu(v => 1 - v)}><IconButton/></button>
                <div className="ConteinerOptions">
                    <div className="Options">
                        <button className="WarningButton"><IconWarning/><div>Denunciar</div></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="media" />
        <div className="Textcontent">
            <div className="headline">
                <div className="title">Title</div>
                <div className="subhead">subhead</div>
            </div>
            <div className="supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
            <div className="actions">
                <button className="button1"><IconThumbDownLine/></button>
                <button className="button2"><IconThumbUpLine/></button>
            </div>
        </div>
    </StyledLatter>);
}

const IconButton = () => {
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  className="IconButtonSVG">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z" fill="currentColor" />
    </svg>
    );
}

const IconLetter = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
    </svg>
    );
}

const IconLetterOpen = () => {
    return(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zm16.103 1.39l-6.285 5.439-6.414-5.445-1.294 1.524 7.72 6.555 7.581-6.56-1.308-1.513z" fill="currentColor"/>
        </svg>);
}

const IconThumbUpLine = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z" fill="currentColor" />
    </svg>);
}

const IconThumbDownLine = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 15h-3V3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-5.293 1.293l-6.4 6.4a.5.5 0 0 1-.654.047L8.8 22.1a1.5 1.5 0 0 1-.553-1.57L9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H16a1 1 0 0 1 1 1v11.586a1 1 0 0 1-.293.707z" fill="currentColor"/></svg>);
}

const IconWarning = () => {
    return(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
        </svg>);
}
export default LetterBox;


