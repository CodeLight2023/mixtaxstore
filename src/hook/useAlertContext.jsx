import { useContext } from "react";
import { AlertContext } from "../context/AlertContext/AlertContext";

function useAlertContext() {
    return useContext(AlertContext);
}
export default useAlertContext