import { AccountContext } from "./AccountContext";
import { useState } from 'react'

function AccountContextProvider(props) {
    const [currentState, setCurrentState] = useState("Sign In")
    const handleUpState = () => {
        setCurrentState("Sign Up")
    }
    const handleInState = () => {
        setCurrentState("Sign In")
    }

    return (
        <>
            <AccountContext.Provider value={{ currentState, handleInState, handleUpState}}>
                {props.children}
            </AccountContext.Provider>
        </>
    )
}
export default AccountContextProvider