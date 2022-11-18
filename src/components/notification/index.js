import react from "react";
import { IconWarning } from "../letterBox";
import { NotificationContext } from "./NotificationSystem";
import { StyledConteinerNotification, StyledNotification } from "./style";

const Notification = (props) => {
    const contextNot = react.useContext(NotificationContext);

    react.useEffect(() => {
        const intervalDestroy = setInterval(() => {
            HandleNotification();
        }, 30000);

        return () => clearInterval(intervalDestroy);
    }, []);

    const HandleNotification = () => {
        contextNot.remove(props.id);
    }

    return (<StyledNotification type={props.type}>
        <div className='NotificationIcon'>{[<IconWarning />,<IconSuccess/>][props.type]}</div>
        <div className='NotificationText'>{props.text}</div>
        <button className='closedButtonNotification' onClick={HandleNotification}><IconClose /></button>
    </StyledNotification>);
}

const NotificationControl = () => {

    const contextNot = react.useContext(NotificationContext);

    return (<StyledConteinerNotification>
        {contextNot.notifications.map(e => {
            return <Notification text={e.text} id={e.id} type={e.type} key={e.id} />
        })}

    </StyledConteinerNotification>)
}

export default NotificationControl;

const IconClose = () => {
    return (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="currentColor" />
    </svg>
    );
}

const IconSuccess = () => {
    return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7L19.5902 5.59L9.00016 16.17Z"/>
    </svg>
    );
}