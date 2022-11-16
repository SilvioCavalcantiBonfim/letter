import { StyledLatter } from "./style";


const LetterBox = (props) => {
    return (<StyledLatter>
        <div className="header">
            <div className="content">
                <div className="monogram"><IconLetter /></div>
                <div className="text">
                    <div className="text-header">Title</div>
                    <div className="text-subhead">SubTitle</div>
                </div>
            </div>
            <div className="icon-button"><IconButton /></div>
        </div>
        <div className="media">Media</div>
        <div className="Textcontent">TextContent</div>
    </StyledLatter>);
}

const IconButton = () => {
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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


export default LetterBox;


