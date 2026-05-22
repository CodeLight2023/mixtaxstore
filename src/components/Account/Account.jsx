import { NavLink } from 'react-router-dom'
import './Account.css'
import useAccountContext from '../../hook/useAccountContext'
import { useState } from 'react'
import useAuthContext from '../../hook/useAuthContext'
import AlertPopup from '../AlertPopup/AlertPopup'
import useAlertContext from '../../hook/useAlertContext'
function Account() {
    const { currentState, handleInState, handleUpState } = useAccountContext()
    const { login } = useAuthContext();
    const { showAlert } = useAlertContext();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users")) || []
        if(currentState === "Sign Up") {
            const userExits = users.find((user) => user.email === formData.email)
            const newUser = {
                id: crypto.randomUUID(),
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
                isLoggedIn: false,
            }

            if(userExits) {
                showAlert("error", "User Already exist")
            } else {
                users.push(newUser)
                localStorage.setItem("users", JSON.stringify(users))
                showAlert("success", `Account Created Successfully, ${newUser.fullName}`)
            }
        }
        if(currentState === "Sign In") {
            login(formData)
        }

        return (
            setFormData({
                fullName: '',
                email: '',
                password: '',
            })
        )
    }


    return (
        <>
            <section id="account">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-head">
                            <div className={currentState === "Sign In" ? "head active" : "head"} onClick={handleInState}>
                                <h2>Sign In</h2>
                            </div>
                            <div className={currentState === "Sign Up" ? "head active" : "head"} onClick={handleUpState}>
                                <h2>Sign Up</h2>
                            </div>
                        </div>
                        <div className="input-box">
                            {currentState === "Sign Up"  && (
                                <div className="box">
                                    <input type="text" name="fullName" value={formData.fullName} placeholder="Full Name" onChange={handleChange} required/>
                                </div>
                            )}
                            <div className="box">
                                <input type="email" name="email" value={formData.email} placeholder="Email Address" onChange={handleChange} required/>
                            </div>
                            <div className="box">
                                <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className="btn">
                            <button>{currentState}</button>
                        </div>
                        {currentState === "Sign In" && (
                            <div className="oth-link">
                                <NavLink to="#">Forgotten Password</NavLink>
                            </div>
                        )}
                    </form>
                </div>
            </section>

            <AlertPopup />
        </>
    )
}
export default Account