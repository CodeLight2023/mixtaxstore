import { useState } from "react";
import { AuthContext } from "./AuthContext";
import AlertPopup from "../../components/AlertPopup/AlertPopup";
import useAlertContext from "../../hook/useAlertContext";

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(() => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        return users.find((user) => user.isLoggedIn === true);
    })
    const { showAlert } = useAlertContext();
    

    const login = (userData) => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        const validUser = users.find((user) => {
            return (
                user.email === userData.email && user.password === userData.password
            )
        })
        if(!validUser) {
            showAlert("error", "Invalid email or password")
            return;
        } else {
            const updatedUsers = users.map((user) => {
                if(user.email === validUser.email) {
                    return {...user, isLoggedIn: true}
                }
                return {
                    ...user, isLoggedIn: false
                }
            })
            // SAVE UPDATED USERS
            localStorage.setItem("users", JSON.stringify(updatedUsers))
            setCurrentUser({...validUser, isLoggedIn: true})
            showAlert("success", `Welcome ${validUser.fullName}`);
        }
    }   
        
    const logout = () => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        const updatedUsers = users.map((user) => ({
            ...user, isLoggedIn: false
        }))
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }} >
            {props.children}
            <AlertPopup />
        </AuthContext.Provider>
    )
}
export default AuthContextProvider