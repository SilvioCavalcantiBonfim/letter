import react from "react";
import { IconClose, IconSuccess, IconWarning } from "../../icons";
import { NotificationContext } from "./NotificationSystem";
import { StyledConteinerNotification, StyledNotification } from "./style";

const Notification = (props) => {
    const contextNot = react.useContext(NotificationContext);
    const [destroy, setDestroy] = react.useState(false);

    react.useEffect(() => {
        const intervalDestroyAfterTime = setInterval(() => {
            setDestroy(true);
        }, 29500);

        return () => clearInterval(intervalDestroyAfterTime);
    }, []);

    react.useEffect(() => {
        const intervalDestroy = destroy && setInterval(() => {
            contextNot.remove(props.id);
        }, 500);
        return () => destroy && clearInterval(intervalDestroy);
    }, [destroy]);

    const HandleNotification = () => {
        setDestroy(true);
    }

    return (<StyledNotification {...{type:props.type, destroy: destroy}}>
        <div className='NotificationIcon'>{[<IconWarning />, <IconSuccess />][props.type]}</div>
        <div className='NotificationText'>{props.text}</div>
        <button className='closedButtonNotification' onClick={HandleNotification}><IconClose /></button>
        <div className="barTime"/>
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