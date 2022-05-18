import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Preloader from "../components/Preloader/preloader";
import Sections from "../components/Sections/sections";

const general = () => {
    return 	(
        <div className="nk-wrap">
            <Header />
            <Sections />
            <Footer />
            <div className="nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i">
                <div className="ovm-line"></div>
            </div>
            <Preloader />
        </div>  
    );
};

export default general;