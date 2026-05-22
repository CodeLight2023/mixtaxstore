import { NavLink } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";
import './HomeHeroSection.css'
import { assets } from "../../data/data";

function HomeHeroSection() {
    return (
        <>
        <section id="home">
            <div className="container">
                <div className="banner-text">
                    <div className="top">Urban Quality</div>
                    <h2>Accessories made available at affordable rate</h2>
                    <NavLink to="/store">Explore Our Store <IoIosArrowRoundForward /></NavLink>
                </div>
                <div className="banner-img">
                    <div className="circle"></div>
                    <img src={assets.heroImg} alt="MixTax Hero Image" draggable="false" loading="lazy" />
                </div>
            </div>
        </section>
        </>
    )
}
export default HomeHeroSection