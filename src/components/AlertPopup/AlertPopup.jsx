import { RiCloseCircleFill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";
import './AlertPopup.css'
import useAlertContext from "../../hook/useAlertContext";
function AlertPopup() {
    const { alertType, alertMsg, closeAlert } = useAlertContext()
    if(!alertMsg && !alertType) return null
    return (
        <>
            <div className="popup-container">
                <div className="popup">
                    <div className={alertType === "error" ? "icon error" : "icon success"}>
                        {alertType === "error" ? <RiCloseCircleFill /> : <IoIosCheckmarkCircle />}
                    </div>
                    <h2>{alertMsg}</h2>
                    <div className="button">
                        <button className="btn ok" onClick={closeAlert}>OK</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AlertPopup