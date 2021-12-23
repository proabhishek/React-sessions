import React from "react" 
import Navbar from "./Navbar/Navbar"
import HeroSection from "./HeroSection/HeroSection"
import FeatureSection from "./FeatureSection/FeatureSection"
import CardSection from "./CardSection/CardSection"
import Footer from "./Footer/Footer"

const App =()=>{
    return(
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <CardSection />
            <Footer />
        </div>
    )
}
export default App
