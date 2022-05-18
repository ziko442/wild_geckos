/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

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
        <div className="header-main">
            <div className="header-container container container-xxl">
                <div className="header-wrap">
                    {/* <!-- Logo @s --> */}
                    <div className="header-logo logo animated" data-animate="fadeInDown" data-delay=".6">
                        <a href="./" className="logo-link">
                            <img className="logo-dark" src="images/logo-s2-white.png" srcSet="images/logo-s2-white2x.png 2x" alt="logo"/>
                            <img className="logo-light" src="images/logo-s2-white.png" srcSet="images/logo-s2-white2x.png 2x" alt="logo"/>
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
                            <ul className="menu">
                                <li className="menu-item"><a className="menu-link nav-link" onClick={() => scrollToTestDiv('header')} href="#header">Home</a></li>
                                <li className="menu-item"><a className="menu-link nav-link"  onClick={() => scrollToTestDiv('about')} href="#about">About</a></li>
                                <li className="menu-item"><a className="menu-link nav-link" onClick={() => scrollToTestDiv('how-to-buy')} href="#how-to-buy">Exchange</a></li>
                                <li className="menu-item"><a className="menu-link nav-link" onClick={() => scrollToTestDiv('tokensale')} href="#tokensale">Tokens</a></li>
                                <li className="menu-item"><a className="menu-link nav-link" onClick={() => scrollToTestDiv('roadmap')} href="#roadmap" >Roadmap</a></li>
                                <li className="menu-item"><a className="menu-link nav-link" onClick={() => scrollToTestDiv('contact')} href="#contact">Contact</a></li>
                                <li className="menu-item has-sub">
                                    <a className="menu-link nav-link menu-toggle" href="#">More</a>
                                    <ul className="menu-sub menu-drop">
                                        <li className="menu-item"><a className="menu-link nav-link" href="#team">Team</a></li>
                                        <li className="menu-item"><a className="menu-link nav-link" href="#faqs">Faqs</a></li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </nav>
                    </div>{/* <!-- .header-navbar @e --> */}
                </div>                                                
            </div>
        </div>{/* <!-- .header-main @e --> */}

        <div className="banner banner-fs tc-light">

            <div className="nk-block nk-block-header nk-block-sm my-auto">
                <div className="container pt-5">
                    <div className="banner-caption text-center">
                        <h1 className="title title-xl-2 ttu animated" data-animate="fadeInUp" data-delay="0.7">World First Decentralized Marketplace with blockchain infrastructure</h1>
                        <div className="row justify-content-center pb-3">
                            <div className="col-sm-11 col-xl-11 col-xxl-8">
                                <p className="lead animated" data-animate="fadeInUp" data-delay="0.8">The first decentralized Marketplace which makes simplifies and standarizes data with blockchain technology. We provides user-friendly, efficient and secure crypto solutions and utilizing blockchain technology. </p>
                            </div>
                        </div>
                        <div className="cpn-action">
                            <ul className="btn-grp mx-auto">
                                <li className="animated" data-animate="fadeInUp" data-delay="1"><a href="#tokensale" className="menu-link btn btn-round btn-outline btn-primary">TOKEN SALE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-block nk-block-status">
                <div className="container container-xxl">
                    <div className="row gutter-vr-40px justify-content-between">
                        <div className="col-xxl-6 col-xl-5 col-lg-5">
                            <div className="progress-wrap progress-wrap-point animated" data-animate="fadeInUp" data-delay="0.8">
                                <ul className="progress-info progress-info-s2">
                                    <li>Raised -  <span>1,1250 Tokens</span></li>
                                    <li className="text-right">Target - <span>150,000 Tokens</span></li>
                                </ul>
                                <div className="progress-bar progress-bar-xs">
                                    <div className="progress-percent progress-percent-s2" data-percent="30"></div>
                                    <div className="progress-point" data-point="25">Soft Cap</div>
                                    <div className="progress-point" data-point="55">Crowdsale</div>
                                    <div className="progress-point" data-point="85">Hard Cap</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-7 text-center text-sm-left">
                            <div className="row justify-content-around gutter-vr-30px">
                                <div className="col-sm-4 col-md-6 col-lg-4 col-xl-5">
                                    <div className="status-info animated" data-animate="fadeInUp" data-delay="0.9">
                                        <h6 className="title title-xxs tc-default status-title ttu">Current Bonus</h6>
                                        <h3 className="fz-3 fw-3 status-percent">20%</h3>
                                        <div className="fz-8">Contributors can receive</div>
                                    </div>
                                </div>
                                <div className="col-sm-8 col-md-6 col-lg-7 col-xl-7">
                                    <div className="status-countdown float-sm-right animated" data-animate="fadeInUp" data-delay="1">
                                        <h6 className="title title-xxs tc-default status-title ttu">The Bonus ends in</h6>
                                        <div className="countdown justify-content-center justify-content-sm-start countdown-s3 countdown-s3-alt" data-date="2021/08/10" data-min-text="Minutes" data-sec-text="Seconds"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="nk-block nk-block-actions">
                <div className="container container-xxl">
                    <div className="row gutter-vr-40px align-items-center">
                        <div className="col-sm-7 d-flex justify-content-center justify-content-sm-start">
                            <ul className="btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px">
                                <li className="animated" data-animate="fadeInUp" data-delay="0.8"><a href="https://www.youtube.com/watch?v=SSo_EIwHSd4" className="link link-light link-break video-popup"><em className="icon-circle icon-border icon-animation fas fa-play"></em><span>How it Works</span></a></li>
                                <li className="animated" data-animate="fadeInUp" data-delay="0.9"><a href="#" className="link link-light link-break"><em className="icon-circle icon-border far fa-lightbulb"></em><span>Why buy Tokens now?</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-5">
                            <ul className="social-links social-links-s2 justify-content-center justify-content-sm-end animated" data-animate="fadeInUp" data-delay="1">
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                                <li><a href="#"><em className="fab fa-medium-m"></em></a></li>
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-youtube"></em></a></li>
                                <li><a href="#"><em className="fab fa-bitcoin"></em></a></li>
                                <li><a href="#"><em className="fab fa-github"></em></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Place Particle Js --> */}
            <div id="particles-bg" className="particles-container is-fixed particles-bg op-20"></div>
        </div>
        
    </header>
    );
};

export default Header;