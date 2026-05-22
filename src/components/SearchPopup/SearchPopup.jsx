import { RiCloseFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import './SearchPopup.css'
function SearchPopUp(props) {
    return (
        <>
            <div className="search-popup">
                <div className="popup">
                    <div className="search-box">
                        <form action="">
                            <div className="box">
                                <input type="text" placeholder="Search for products, brands and more" />
                                <button type="submit"><CiSearch /></button>
                            </div>
                        </form>
                        <div className="closeBtn" onClick={props.toggleSearchPopup}>
                            <RiCloseFill />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchPopUp