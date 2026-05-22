import { NavbarContext } from "./NavbarContext"
import { useState } from "react";

function NavbarContextProvider(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchPopupOpen, setSearchPopupOpen] = useState(false);

    const NavLinkActive  = ({isActive}) => {
        return isActive ? 'active' : '';
    }
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const toggleSearchPopup = () => {
        setSearchPopupOpen(!searchPopupOpen);
    }


    return (
        <NavbarContext.Provider value={{ NavLinkActive, menuOpen, toggleMenu, searchPopupOpen, toggleSearchPopup }}>
            {props.children}
        </NavbarContext.Provider>
    )
}
export default NavbarContextProvider