import { Helmet } from "react-helmet-async";
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection"

import Shop from "../../components/Shop/Shop";

function Home() {
    
    return (
        <>
            <Helmet>
                <title>Mixtas | Shopping Website</title>
            </Helmet>
            <HomeHeroSection />
            <Shop />
        </>
    )
}
export default Home