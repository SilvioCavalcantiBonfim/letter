import react from "react";

export const NotificationContext = react.createContext({notifications: [], remove: () => alert("error"), add: () => alert("error")});

//default notification {id: 1, text: ""}

const NotificationProvider = (props) => {
    const [Notifications, setNotification] = react.useState([]);

    const AddNotification = (notfication) => {
        setNotification(v =>  v.filter(e => e.id !== notfication.id).concat([notfication]));
    }

    const removeNotification = (id) => {
        setNotification(v => v.filter(e => e.id !== id));
    }

    return(<NotificationContext.Provider value={{notifications: Notifications, remove: removeNotification, add: AddNotification}}>
        {props.children}
    </NotificationContext.Provider>)
}

export default NotificationProvider;