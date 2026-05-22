import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection"
import SearchPopUp from "../../components/SearchPopup/SearchPopup"
import { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";
import Shop from "../../components/Shop/Shop";

function Home() {
    const { searchPopupOpen, toggleSearchPopup } = useContext(NavbarContext);
    return (
        <>
            <HomeHeroSection />
            {searchPopupOpen && <SearchPopUp toggleSearchPopup={toggleSearchPopup} />}
            <Shop />
        </>
    )
}
export default Home