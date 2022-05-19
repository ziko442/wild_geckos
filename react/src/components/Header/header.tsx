/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Main from "./Main/main";
import Navbar from "./Navbar/navbar";

function scrollToTestDiv(secTo:any){
    // const divElement = document.getElementById(secTo);
    // divElement.scrollIntoView({ behavior: 'smooth' });
    
    document.getElementById(secTo)?.scrollIntoView();
    window.location.replace('/#'+secTo);
}

const Header = () => {
    return (
        <header className="nk-header page-header is-transparent is-sticky is-dark" id="header">
        {/* <!-- Header @s --> */}
        <Navbar />
        
        {/* <!-- .header-main @e --> */}

        <Main />

    </header>

    );
};

export default Header;