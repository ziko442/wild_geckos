import React from "react";

const Advisors = () => {
  return (

    <section className="section">

        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                    <div className="section-head section-head-s2">
                        <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1"
                            title="Advisors">BOARD MEMBER</h2>
                        <p className="animated tc-white" data-animat="fadeInUp" data-delay="0.2">Our advisors and
                            board members are great part of our team.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container container-xxl">
            <div className="nk-block">
                <div className="has-carousel carousel-nav-center" data-items="4" data-navs="true">
                    <div className="item animated" data-animate="fadeInUp" data-delay="0.3">
                        <div className="team team-s2 team-odd">
                            <div className="team-photo team-photo-s2">
                                <img src="images/azalea/team-c.jpg" alt=""/>
                            </div>
                            <h5 className="team-name title title-sm">Ron Glabischnig</h5>
                            <span className="team-position team-position-sm">General manager, Coindexin</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="item animated" data-animate="fadeInUp" data-delay="0.4">
                        <div className="team team-s2 team-odd">
                            <div className="team-photo team-photo-s2">
                                <img src="images/azalea/team-b.jpg" alt=""/>
                            </div>
                            <h5 className="team-name title title-sm">Stefan Zakrisson</h5>
                            <span className="team-position team-position-sm">Legal Advisor, TokenWiz Project</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="item animated" data-animate="fadeInUp" data-delay="0.5">
                        <div className="team team-s2 team-odd">
                            <div className="team-photo team-photo-s2">
                                <img src="images/azalea/team-a.jpg" alt=""/>
                            </div>
                            <h5 className="team-name title title-sm">Moises Teare</h5>
                            <span className="team-position team-position-sm">Managing Director, ICOCrypto</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="item animated" data-animate="fadeInUp" data-delay="0.6">
                        <div className="team team-s2 team-odd">
                            <div className="team-photo team-photo-s2">
                                <img src="images/azalea/team-d.jpg" alt=""/>
                            </div>
                            <h5 className="team-name title title-sm">Michiel Berende</h5>
                            <span className="team-position team-position-sm">Insurance Lead &amp; Financial
                                Advisor</span>
                            <ul className="team-social team-social-s2">
                                <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Block @s --> */}
            <div className="nk-block block-partners">
                <h6 className="title title-md ttu text-center animated" data-animate="fadeInUp" data-delay="0.65">
                    Our Partners</h6>
                <ul className="has-carousel partner-list justify-content-center animated" data-items="7"
                    data-items-mobile="2" data-auto="true" data-loop="true" data-animate="fadeInUp"
                    data-delay="0.75">
                    <li className="partner-logo"><img src="images/partners/a-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/b-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/c-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/d-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/e-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/f-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/g-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/a-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/b-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/c-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/d-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/e-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/f-light.png" alt=""/></li>
                    <li className="partner-logo"><img src="images/partners/g-light.png" alt=""/></li>
                </ul>
            </div>
            {/* <!-- Block @e --> */}
        </div>

    </section>
  );
};
export default Advisors;
