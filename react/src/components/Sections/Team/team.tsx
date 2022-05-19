import React from 'react'

const  Team = () => {
    return (
        <section className="section" id="team">

                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div className="section-head section-head-s2">
                                <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="Core Team">OUR TEAM</h2>
                                <p className="animated" data-animate="fadeInUp" data-delay="0.2">With help from our teams, contributors and investors these are the milestones we are looking forward to achieve.</p>
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
                                        <img src="images/azalea/team-a.jpg" alt=""/>
                                        <a href="#team-popup-1" className="team-show content-popup"></a>
                                    </div>
                                    <h5 className="team-name title title-md">Louis Baker</h5>
                                    <span className="team-position">CEO &amp; Lead Blockchain</span>
                                    <ul className="team-social team-social-s2">
                                        <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                        <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                        <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                                    </ul>
                                </div>
                                {/* <!-- Start .team-profile  --> */}
                                <div id="team-popup-1" className="team-popup bg-theme-dark tc-light mfp-hide">
                                    <a title="Close" className="mfp-close">×</a>
                                    <div className="row align-items-start">
                                        <div className="col-md-6">
                                            <div className="team-photo">
                                                <img src="images/azalea/team-a.jpg" alt="team"/>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                        <div className="col-md-6">
                                            <div className="team-popup-info pl-md-3">
                                                <h3 className="team-name title title-lg pt-4">Louis Baker</h3>
                                                <p className="team-position">CEO &amp; Lead Blockchain</p>
                                                <ul className="team-social team-social-s2 mb-4">
                                                    <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                                    <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                                </ul>
                                                <p>He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem. </p>
                                                <p>Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.</p>
                                                <div className="progress-list">
                                                    <div className="progress-wrap">
                                                        <div className="progress-title">Blockchain <span className="progress-amount">85%</span></div>
                                                        <div className="progress-bar progress-bar-xs bg-black-10">
                                                            <div className="progress-percent bg-primary" data-percent="85"></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-wrap">
                                                        <div className="progress-title">Decentralization <span className="progress-amount">68%</span></div>
                                                        <div className="progress-bar progress-bar-xs bg-black-10">
                                                            <div className="progress-percent bg-primary" data-percent="68"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                    </div>{/* <!-- .row  --> */}
                                </div>{/* <!-- .team-profile  --> */}
                            </div>
                            <div className="item animated" data-animate="fadeInUp" data-delay="0.4">
                                <div className="team team-s2 team-even">
                                    <div className="team-photo team-photo-s2">
                                        <img src="images/azalea/team-b.jpg" alt=""/>
                                        <a href="#team-popup-2" className="team-show content-popup"></a>
                                    </div>
                                    <h5 className="team-name title title-md">Stefan Harary</h5>
                                    <span className="team-position">CTO &amp; Senior Developer</span>
                                    <ul className="team-social team-social-s2">
                                        <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                        <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                        <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                                    </ul>
                                </div>
                                
                                {/* <!-- Start .team-profile  --> */}
                                <div id="team-popup-2" className="team-popup bg-theme-dark tc-light mfp-hide">
                                    <a title="Close" className="mfp-close">×</a>
                                    <div className="row align-items-start">
                                        <div className="col-md-6">
                                            <div className="team-photo">
                                                <img src="images/azalea/team-b.jpg" alt="team"/>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                        <div className="col-md-6">
                                            <div className="team-popup-info pl-md-3">
                                                <h3 className="team-name title title-lg pt-4">Stefan Harary</h3>
                                                <p className="team-position">CTO &amp; Senior Developer</p>
                                                <ul className="team-social team-social-s2 mb-4">
                                                    <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                                    <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                                </ul>
                                                <p>He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem. </p>
                                                <p>Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.</p>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                    </div>{/* <!-- .row  --> */}
                                </div>{/* <!-- .team-profile  --> */}
                            </div>
                            <div className="item animated" data-animate="fadeInUp" data-delay="0.5">
                                <div className="team team-s2 team-odd">
                                    <div className="team-photo team-photo-s2">
                                        <img src="images/azalea/team-c.jpg" alt=""/>
                                        <a href="#team-popup-3" className="team-show content-popup"></a>
                                    </div>
                                    <h5 className="team-name title title-md">Moises Teare</h5>
                                    <span className="team-position">Blockchain App Developer</span>
                                    <ul className="team-social team-social-s2">
                                        <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                        <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                        <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                                    </ul>
                                </div>
                                
                                {/* <!-- Start .team-profile  --> */}
                                <div id="team-popup-3" className="team-popup bg-theme-dark tc-light mfp-hide">
                                    <a title="Close" className="mfp-close">×</a>
                                    <div className="row align-items-start">
                                        <div className="col-md-6">
                                            <div className="team-photo">
                                                <img src="images/azalea/team-c.jpg" alt="team"/>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                        <div className="col-md-6">
                                            <div className="team-popup-info pl-md-3">
                                                <h3 className="team-name title title-lg pt-4">Moises Teare</h3>
                                                <p className="team-position">Blockchain App Developer</p>
                                                <ul className="team-social team-social-s2 mb-4">
                                                    <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                                    <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                                </ul>
                                                <p>He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem. </p>
                                                <p>Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.</p>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                    </div>{/* <!-- .row  --> */}
                                </div>{/* <!-- .team-profile  --> */}
                            </div>
                            <div className="item animated" data-animate="fadeInUp" data-delay="0.6">
                                <div className="team team-s2 team-even">
                                    <div className="team-photo team-photo-s2">
                                        <img src="images/azalea/team-d.jpg" alt=""/>
                                        <a href="#team-popup-4" className="team-show content-popup"></a>
                                    </div>
                                    <h5 className="team-name title title-md">Louis Baker</h5>
                                    <span className="team-position">CEO &amp; Lead Blockchain</span>
                                    <ul className="team-social team-social-s2">
                                        <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                        <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                        <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                                    </ul>
                                </div>
                                
                                {/* <!-- Start .team-profile  --> */}
                                <div id="team-popup-4" className="team-popup bg-theme-dark tc-light mfp-hide">
                                    <a title="Close" className="mfp-close">×</a>
                                    <div className="row align-items-start">
                                        <div className="col-md-6">
                                            <div className="team-photo">
                                                <img src="images/azalea/team-d.jpg" alt="team"/>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                        <div className="col-md-6">
                                            <div className="team-popup-info pl-md-3">
                                                <h3 className="team-name title title-lg pt-4">Louis Baker</h3>
                                                <p className="team-position">CEO &amp; Lead Blockchain </p>
                                                <ul className="team-social team-social-s2 mb-4">
                                                    <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                                    <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                                </ul>
                                                <p>He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem. </p>
                                                <p>Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.</p>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                    </div>{/* <!-- .row  --> */}
                                </div>{/* <!-- .team-profile  --> */}
                            </div>
                            <div className="item animated" data-animate="fadeInUp" data-delay="0.7">
                                <div className="team team-s2 team-odd">
                                    <div className="team-photo team-photo-s2">
                                        <img src="images/azalea/team-a.jpg" alt=""/>
                                        <a href="#team-popup-5" className="team-show content-popup"></a>
                                    </div>
                                    <h5 className="team-name title title-md">Louis Baker</h5>
                                    <span className="team-position">CEO &amp; Lead Blockchain</span>
                                    <ul className="team-social team-social-s2">
                                        <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                        <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                        <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                                    </ul>
                                </div>
                                
                                {/* <!-- Start .team-profile  --> */}
                                <div id="team-popup-5" className="team-popup bg-theme-dark tc-light mfp-hide">
                                    <a title="Close" className="mfp-close">×</a>
                                    <div className="row align-items-start">
                                        <div className="col-md-6">
                                            <div className="team-photo">
                                                <img src="images/azalea/team-a.jpg" alt="team"/>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                        <div className="col-md-6">
                                            <div className="team-popup-info pl-md-3">
                                                <h3 className="team-name title title-lg pt-4">Louis Baker</h3>
                                                <p className="team-position">CEO &amp; Lead Blockchain </p>
                                                <ul className="team-social team-social-s2 mb-4">
                                                    <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                                    <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                                </ul>
                                                <p>He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem. </p>
                                                <p>Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.</p>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                    </div>{/* <!-- .row  --> */}
                                </div>{/* <!-- .team-profile  --> */}
                            </div>
                            <div className="item animated" data-animate="fadeInUp" data-delay="0.8">
                                <div className="team team-s2 team-even">
                                    <div className="team-photo team-photo-s2">
                                        <img src="images/azalea/team-b.jpg" alt=""/>
                                        <a href="#team-popup-6" className="team-show content-popup"></a>
                                    </div>
                                    <h5 className="team-name title title-md">Stefan Harary</h5>
                                    <span className="team-position">CTO &amp; Senior Developer</span>
                                    <ul className="team-social team-social-s2">
                                        <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                        <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                        <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                                    </ul>
                                </div>
                                
                                {/* <!-- Start .team-profile  --> */}
                                <div id="team-popup-6" className="team-popup bg-theme-dark tc-light mfp-hide">
                                    <a title="Close" className="mfp-close">×</a>
                                    <div className="row align-items-start">
                                        <div className="col-md-6">
                                            <div className="team-photo">
                                                <img src="images/azalea/team-b.jpg" alt="team"/>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                        <div className="col-md-6">
                                            <div className="team-popup-info pl-md-3">
                                                <h3 className="team-name title title-lg pt-4">Stefan Harary</h3>
                                                <p className="team-position">CTO &amp; Senior Developer</p>
                                                <ul className="team-social team-social-s2 mb-4">
                                                    <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                                    <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                                </ul>
                                                <p>He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem. </p>
                                                <p>Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.</p>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                    </div>{/*<!-- .row  --> */}
                                </div>{/* <!-- .team-profile  --> */}
                            </div>
                            <div className="item animated" data-animate="fadeInUp" data-delay="0.9">
                                <div className="team team-s2 team-odd">
                                    <div className="team-photo team-photo-s2">
                                        <img src="images/azalea/team-c.jpg" alt=""/>
                                        <a href="#team-popup-7" className="team-show content-popup"></a>
                                    </div>
                                    <h5 className="team-name title title-md">Moises Teare</h5>
                                    <span className="team-position">Blockchain App Developer</span>
                                    <ul className="team-social team-social-s2">
                                        <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                        <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                        <li><a href="#"><em className="fab fa-twitter"></em></a></li>
                                    </ul>
                                </div>
                                
                                {/* <!-- Start .team-profile  --> */}
                                <div id="team-popup-7" className="team-popup bg-theme-dark tc-light mfp-hide">
                                    <a title="Close" className="mfp-close">×</a>
                                    <div className="row align-items-start">
                                        <div className="col-md-6">
                                            <div className="team-photo">
                                                <img src="images/azalea/team-c.jpg" alt="team"/>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                        <div className="col-md-6">
                                            <div className="team-popup-info pl-md-3">
                                                <h3 className="team-name title title-lg pt-4">Moises Teare</h3>
                                                <p className="team-position">Blockchain App Developer</p>
                                                <ul className="team-social team-social-s2 mb-4">
                                                    <li><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                                                    <li><a href="#"><em className="fab fa-linkedin-in"></em></a></li>
                                                </ul>
                                                <p>He is a great man to work Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Simi lique, autem. </p>
                                                <p>Tenetur quos facere magnam volupt ates quas esse Sedrep ell endus mole stiae tates quas esse Sed repell endus molesti aela uda ntium quis quam iusto minima thanks.</p>
                                            </div>
                                        </div>{/* <!-- .col  --> */}
                                    </div>{/* <!-- .row  --> */}
                                </div>{/* <!-- .team-profile  --> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            
    );
}
export default Team;
