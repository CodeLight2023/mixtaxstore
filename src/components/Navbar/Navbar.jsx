import { Link, NavLink } from "react-router-dom";
import { menuList } from "../../data/data";
import { RxPerson } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { IoPowerOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import './Navbar.css'
import { useEffect, useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";
import useAuthContext from "../../hook/useAuthContext";
import SearchPopUp from "../SearchPopup/SearchPopup";
import useShopCart from "../../hook/useShopCart";

function Navbar() {
    const { NavLinkActive, menuOpen, toggleMenu, toggleSearchPopup, searchPopupOpen, } = useContext(NavbarContext);
    const { currentUser, logout } = useAuthContext();
    const { cartQuantity } = useShopCart()
    const handleProfileBtn = () => {
        const profileBox = document.querySelector('header nav .profile-box')
        profileBox.classList.toggle('active')
    }
    

    useEffect(() => {
        const changeBackground = () => {
            if(window.scrollY >= 80) {
                document.querySelector('header nav').style.background = 'var(--main-2)';
            } else {
                document.querySelector('header nav').style.background = 'var(--main)';
            }
        };
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, []);
    return (
        <>
        <header>
            <nav className={menuOpen ? 'active' : ''}>
                <div className="menuContent">
                    <ul>
                        {menuList.map(item => (
                            <li key={item.id}><NavLink to={item.link} className={NavLinkActive}>{item.title}</NavLink></li>
                        ))}
                        {currentUser  ? (
                            <div className="acctBtn">
                                <NavLink to="/profile"><RxPerson /> Profile </NavLink>
                            </div>
                        ) : ( 
                                <div className="acctBtn">
                                    <NavLink to="/account"><RxPerson /> Account</NavLink>
                                </div>
                            )
                        }
                    </ul>
                    <div className="btn menuBtn" onClick={toggleMenu}>
                        {menuOpen ? <RiCloseFill style={{transform: "rotate(90deg)"}} /> : <RiMenu4Line />}
                        {/* <RiMenu4Line /> */}
                    </div>
                </div>
                <div className="logo">
                    <Link to='/'><h2>Mixtas</h2></Link>
                </div>
                <div className="menuBtnIcon">
                    {currentUser ? (
                        <div className="btn user" onClick={handleProfileBtn}>
                            <CgProfile title="Account" />
                        </div>
                        // <div className="btn logout" onClick={logout}>
                        //    <IoPowerOutline title="Logout"/>
                        // </div>
                    ) : (
                            <div className="btn user">
                                <Link to="/account"><RxPerson title="Account" /></Link>
                            </div>
                        )
                    }
                    <div className="btn search" onClick={toggleSearchPopup}>
                        <CiSearch title="search" />
                    </div>
                    <div className="btn cart" title="Cart">
                        <Link to="/cart">
                            <AiOutlineShopping />
                            <div className="badge">{currentUser ? cartQuantity : 0 }</div>
                        </Link>
                    </div>
                    {currentUser && (
                        <div className="profile-box">
                            <div className="profile">
                                <h2>{currentUser.fullName}</h2>
                                <button className="logout-btn" onClick={logout}><IoPowerOutline /> Logout</button>
                            </div>
                        </div>
                    )}
                </div>

            </nav>
        </header>
        {searchPopupOpen && <SearchPopUp toggleSearchPopup={toggleSearchPopup} />}
        </>
    )
}
export default Navbar