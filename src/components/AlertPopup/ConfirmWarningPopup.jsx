// import { RiCloseCircleFill } from "react-icons/ri";
// import { IoIosCheckmarkCircle } from "react-icons/io";
import './ConfirmWarningPopup.css'
import useShopCart from '../../hook/useShopCart';
function ConfirmWarningPopup(props) {
    const { ConfirmAlertType, ConfirmAlertMsg, ConfirmAlertActiveProductId, closeConfirmAlert, removeFromCart } = useShopCart()
    if(!ConfirmAlertMsg && !ConfirmAlertType) return null
    console.log(props.id)
    return (
        <>
            <div className="popup-container">
                <div className="popup">
                    {/* <div className={alertType === "error" ? "icon error" : "icon success"}>
                        {alertType === "error" ? <RiCloseCircleFill /> : <IoIosCheckmarkCircle />}
                    </div> */}
                    <h2>{ConfirmAlertMsg}</h2>
                    <div className="button">
                        <button className="btn ok" onClick={() => removeFromCart(ConfirmAlertActiveProductId)}>Remove</button>
                        <button className="btn cancel" onClick={closeConfirmAlert}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ConfirmWarningPopup