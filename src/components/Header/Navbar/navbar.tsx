/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function scrollToTestDiv(secTo:any){
    // const divElement = document.getElementById(secTo);
    // divElement.scrollIntoView({ behavior: 'smooth' });
    
    document.getElementById(secTo)?.scrollIntoView();
    window.location.replace('/#'+secTo);
}

const Navbar = () => {
    return (
        <React.Fragment>
        {/* <!-- Header @s --> */}
        <div className="header-main">
            <div className="header-container container container-xxl">
                <div className="header-wrap">
                    {/* <!-- Logo @s --> */}
                    <div className="header-logo logo animated jungle-logo" data-animate="fadeInDown" data-delay=".6">
                        <a href="./" className="logo-link">
                            <img className="logo-light jungle-logo-light" src="images/logo2.png"
                                srcSet="images/logo2.png 2x" alt="logo"/>
                            <h4 className="logo-text">wild geckos</h4>

                        </a>
                    </div>

                    {/* <!-- Menu Toogle @s --> */}
                    <div className="header-nav-toggle">
                        <a href="#" className="navbar-toggle" data-menu-toggle="header-menu">
                            <div className="toggle-line">
                                <span></span>
                            </div>
                        </a>
                    </div>

                    {/* <!-- Menu @s --> */}
                    <div className="header-navbar animated" data-animate="fadeInDown" data-delay=".6">
                        <nav className="header-menu" id="header-menu">
                            <ul className="menu rounded-pill">
                                <li className="menu-item"><a className="menu-link nav-link" href="#header">Home</a></li>
                                <li className="menu-item"><a className="menu-link nav-link" href="#about">About</a></li>
                                <li className="menu-item"><a className="menu-link nav-link" href="#how-to-buy">Exchange</a>
                                </li>
                                <li className="menu-item"><a className="menu-link nav-link" href="/mint">Mint
                                        NFT</a></li>
                                <li className="menu-item"><a className="menu-link nav-link" href="#tokensale">Tokens</a>
                                </li>
                                <li className="menu-item"><a className="menu-link nav-link" href="#roadmap">Roadmap</a></li>
                                <li className="menu-item"><a className="menu-link nav-link" href="#contact">Contact</a></li>
                                <li className="menu-item has-sub">
                                    <a className="menu-link nav-link menu-toggle" href="#">More</a>
                                    <ul className="menu-sub menu-drop">
                                        <li className="menu-item"><a className="menu-link nav-link" href="#team">Team</a>
                                        </li>
                                        <li className="menu-item"><a className="menu-link nav-link" href="#faqs">Faqs</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </nav>
                    </div>{/* <!-- .header-navbar @e --> */}
                </div>
            </div>
        </div>
        </React.Fragment>

    );
};

export default Navbar;