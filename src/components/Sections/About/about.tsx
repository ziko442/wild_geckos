import React from 'react'
import logo2 from '../../../static/images/logo2.png';
// import json from '../../../utils/test';

const  About = () => {
    return (
        <section className="section" id="about">

        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                    <div className="section-head section-head-s2">
                        <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1"
                            title="What and Why">ABOUT</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container container-xxl">
            <div className="nk-block">
                <div className="row justify-content-between align-items-center gutter-vr-40px">
                    <div className="col-lg-6 order-lg-last">
                        <div className="gfx py-4 animated" data-animate="fadeInUp" data-delay="0.2">
                            <img src={logo2} alt="gfx"/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="nk-block-text">
                            <h2 className="title animated" data-animate="fadeInUp" data-delay="0.3">Our team is
                                focusing on development of <b>PLAY2EARN</b> concept</h2>
                            <p className="animated tc-white" data-animate="fadeInUp" data-delay="0.4">We are
                                promising our community a solid plan on making the weekly earnings stable and
                                growing. </p>
                            <p className="animated tc-white" data-animate="fadeInUp" data-delay="0.5">Our main goal
                                is to expand and seek for the long term.</p>
                            <ul className="btn-grp gutter-vr-20px pdt-m">
                                <li className="animated" data-animate="fadeInUp" data-delay="0.6"><a href="#docs"
                                        className="menu-link btn btn-send btn-round btn-md"><span>White Paper</span>
                                        <em className="icon ti ti-cloud-down tc-white"></em></a></li>
                                 {/* <li className="animated" data-animate="fadeInUp" data-delay="0.7"><a href="#ecosystems" className="menu-link btn btn-underline">See the Ecosystems</a></li>  */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    );
}
export default About;