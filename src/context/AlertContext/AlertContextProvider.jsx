import { AlertContext } from "./AlertContext";
import { useState } from 'react'

function AlertContextProvider(props) {
    const [alertType, setAlertType] = useState(null);
    const [alertMsg, setAlertMsg] = useState(null)

    const showAlert = (type, msg) => {
        setAlertType(type);
        setAlertMsg(msg);

        // auto hide after 3s
        setTimeout(() => {
            setAlertType(null);
            setAlertMsg(null);
        }, 3000);
    };

    const closeAlert = () => {
        setAlertType(null);
        setAlertMsg(null);
    };
    return (
        <AlertContext.Provider value={{ alertType, alertMsg, showAlert, closeAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider