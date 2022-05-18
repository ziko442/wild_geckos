import React from 'react'
// import json from '../../../utils/test';

const  About = () => {
    return (
        <section className="section" id="about">

                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div className="section-head section-head-s2">
                                <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="What and Why">ABOUT</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-xxl">
                    <div className="nk-block">
                        <div className="row justify-content-between align-items-center gutter-vr-40px">
                        <div className="col-lg-6 order-lg-last">
                            <div className="gfx py-4 animated" data-animate="fadeInUp" data-delay="0.2">
                                    <img src="images/azalea/gfx-e.png" alt="gfx"/>
                                </div>
                        </div>
                            <div className="col-lg-5">
                                <div className="nk-block-text">
                                    <h2 className="title animated" data-animate="fadeInUp" data-delay="0.3">We build fully Decentralized Marketplace that Augment Access to Blockchain Technologies</h2>
                                    <p className="animated" data-animate="fadeInUp" data-delay="0.4">We have developed a state-of-the-art marketplace where you can securely and reliably buy and sell any items.  The fastest and most flexible asset platform in existence. It will include easy cryptocurrency payments integration, and even a digital arbitration system. </p>
                                    <p className="animated" data-animate="fadeInUp" data-delay="0.5">At the end, Our aims to integrate all companies, employees, and business assets into a unified blockchain ecosystem, which will make business truly efficient, transparent, and reliable.</p>
                                    <ul className="btn-grp gutter-vr-20px pdt-m">
                                        <li className="animated" data-animate="fadeInUp" data-delay="0.6"><a href={process.env.PUBLIC_URL + '/downloads/roadmap.pdf'} target='_blank' className="menu-link btn btn-primary btn-round btn-lg"><span>White Paper</span> <em className="icon ti ti-cloud-down"></em></a></li>
                                        <li className="animated" data-animate="fadeInUp" data-delay="0.7"><a href="#ecosystems" className="menu-link btn btn-underline">See the Ecosystems</a></li>
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