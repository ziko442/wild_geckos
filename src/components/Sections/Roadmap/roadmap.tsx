import React from 'react'
import roadmapData from '../../../utils/data';

// const divC = styled.div`
//     .roadmap-s2:before{
//         top:30px;
//     }
// `;

const styles = (a1:any,a2:any,index:any) => {
        let classes = 'roadmap roadmap-s2 ';
        classes += 'roadmap-i'+index;
        classes += a1 ? ' roadmap-finished':'';
        classes += a2 ? ' roadmap-running':'';
        return classes;
    }

const Roadmap = () => {
    
    return (
        <section className="section" id="roadmap">

                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div className="section-head section-head-s2">
                                <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="Timeline">ROADMAP</h2>
                                <p className="animated" data-animate="fadeInUp" data-delay="0.2">ICO Crypto is developing a global data-driven platform for the world. Powered by blockchain and smart contracts.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-xxl">
                    <div className="nk-block">
                        <div className="roadmap-wrap roadmap-wrap-ovl-right text-center animated" data-animate="fadeInUp" data-delay="0.3">
                            <div className="roadmap-line-s2"></div>
                            <div className="roadmap-slider has-carousel carousel-nav-center" data-blank="true" data-items="5" data-items-tab-l="4" data-items-tab-p="3" data-items-mobile="2" data-margin="-1" data-navs="true">
                                
                                {/* <div className="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                                    <h6 className="roadmap-year-s2">Q1 2018</h6>
                                    <h5 className="title title-sm roadmap-date">Jan - Apr 2018</h5>
                                    <div className="roadmap-text">
                                        <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                                    </div>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i2 roadmap-running">
                                    <h6 className="roadmap-year-s2">Q2 2018</h6>
                                    <h5 className="title title-sm roadmap-date">Jul - Aug 2018</h5>
                                    <div className="roadmap-text">
                                        <p>Start of the ICO Crypto Platform Development and Introduction of advertiser auctions</p>
                                    </div>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i3">
                                    <h6 className="roadmap-year-s2">Q3 2018</h6>
                                    <h5 className="title title-sm roadmap-date">Sep - Oct 2018</h5>
                                    <div className="roadmap-text">
                                        <p>Start Private Token Sale Round to our contributors.</p>
                                    </div>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i4">
                                    <h6 className="roadmap-year-s2">Q4 2018</h6>
                                    <h5 className="title title-sm roadmap-date">Nov - Dec 2018</h5>
                                    <div className="roadmap-text">
                                        <p>Launch of the mobile Best versions of the Publisher application and Press Tour.</p>
                                    </div>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i5">
                                    <h6 className="roadmap-year-s2">Q1 2019</h6>
                                    <h5 className="title title-sm roadmap-date">Jan - Apr 2019</h5>
                                    <div className="roadmap-text">
                                        <p>Release of the initial versions of operational applications and smart contracts.</p>
                                    </div>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i6">
                                    <h6 className="roadmap-year-s2">Q2 2019</h6>
                                    <h5 className="title title-sm roadmap-date">Jul - Aug 2019</h5>
                                    <div className="roadmap-text">
                                        <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                                    </div>
                                </div> */}
                                {roadmapData.Quarters.map((Q,index) => (
                                    //@ts-ignore
                                    <div datacustomattribute="30px" className={styles(Q.finished,Q.running,index+1)} >
                                        <h6 className="roadmap-year-s2">{Q.name}</h6>
                                        <h5 className="title title-sm roadmap-date">{Q.period}</h5>
                                        <div className="roadmap-text">
                                            <p>{Q.events[0]}</p>
                                            <p>{Q.events[1]}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            
    );
}
export default Roadmap;