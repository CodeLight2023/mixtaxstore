import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

function useAuthContext() {
    return useContext(AuthContext);
}
export default useAuthContext