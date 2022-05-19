import React from 'react'
import roadmapData from '../../../utils/data';

// const divC = styled.div`
//     .roadmap-s2:before{
//         top:30px;
//     }
// `;

const styles = (a1:any,a2:any,index:any) => {
        let classNamees = 'roadmap roadmap-s2 ';
        classNamees += 'roadmap-i'+index;
        classNamees += a1 ? ' roadmap-finished':'';
        classNamees += a2 ? ' roadmap-running':'';
        return classNamees;
    }

const Roadmap = () => {
    
    return (

        <section className="section" id="roadmap">

            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                        <div className="section-head section-head-s2">
                            <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1"
                                title="Timeline">ROADMAP</h2>
                            <p className="animated tc-white" data-animate="fadeInUp" data-delay="0.2">ICO Crypto is
                                developing a global data-driven platform for the world. Powered by blockchain and
                                smart contracts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-xxl">
                <div className="nk-block">
                    <div className="roadmap-wrap roadmap-wrap-ovl-right text-center animated" data-animate="fadeInUp"
                        data-delay="0.3">
                        <div className="roadmap-line-s2"></div>
                        <div className="roadmap-slider has-carousel carousel-nav-center " data-blank="true"
                            data-items="5" data-items-tab-l="4" data-items-tab-p="3" data-items-mobile="2"
                            data-margin="-1" data-navs="true">
                            <div className="bg-roadmap mr-4 text-dark roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                                <h6 className="roadmap-year-s2 pt-2">Q2 2022</h6>
                                <h5 className="title title-sm roadmap-date">Jan - Apr 2022</h5>
                                <div className="roadmap-text">
                                    <p className="text-white fw-bold">
                                        Project overview <br/>
                                        Establish social media presence <br/>
                                        Initial White paper release <br/>
                                        Set marketing strategies <br/>
                                        Building the community
                                    </p>
                                </div>
                            </div>
                            <div className="bg-roadmap mr-4 text-dark roadmap roadmap-s2 roadmap-i2 roadmap-running">
                                <h6 className="roadmap-year-s2 pt-2">Q3 2022</h6>
                                <h5 className="title title-sm roadmap-date">Jul - Aug 2022</h5>
                                <div className="roadmap-text">
                                    <p className="text-white fw-bold">
                                        Initial Minting Launch (5000 NFTs) <br/>
                                        Listing NFTs on Major/Leading Platforms <br/>
                                        Second Wave NFTs Minting <br/>
                                        Release of $Token Governance Token <br/>
                                        Partnerships with Major Advertising Platforms <br/>
                                        CMC and CoinGecko</p>
                                </div>
                            </div>
                            <div className="bg-roadmap mr-4 text-dark roadmap roadmap-s2 roadmap-i3">
                                <h6 className="roadmap-year-s2 pt-2">Q4 2022</h6>
                                <h5 className="title title-sm roadmap-date">Sep - Oct 2022</h5>
                                <div className="roadmap-text">
                                    <p className="text-white fw-bold">
                                        Staking Operation Dashboard <br/>
                                        Launch NFT marketplace <br/>
                                        Blockchain, Exchange platforms and more partnerships <br/>
                                        Gameplay reveal (Trailer) <br/>
                                        Immense marketing campaign
                                    </p>
                                </div>
                            </div>
                            <div className="bg-roadmap mr-4 text-dark roadmap roadmap-s2 roadmap-i4">
                                <h6 className="roadmap-year-s2 pt-2">Q1 2023</h6>
                                <h5 className="title title-sm roadmap-date">Nov - Dec 2022</h5>
                                <div className="roadmap-text">
                                    <p className="text-white fw-bold">
                                        Alpha Game <br />
                                        Expansion through collaborations <br />
                                        Beta Game Version release <br />
                                        Proceeding to the next level (Mentoring, breeding, tournaments…) <br/>
                                        To The Moon…
                                    </p>
                                </div>
                            </div>
                             {/* <div className="roadmap roadmap-s2 roadmap-i5">
                                <h6 className="roadmap-year-s2">Q1 2023</h6>
                                <h5 className="title title-sm roadmap-date">Jan - Apr 2023</h5>
                                <div className="roadmap-text">
                                    <p>Release of the initial versions of operational applications and smart contracts.</p>
                                </div>
                            </div>
                            <div className="roadmap roadmap-s2 roadmap-i6">
                                <h6 className="roadmap-year-s2">Q2 2023</h6>
                                <h5 className="title title-sm roadmap-date">Jul - Aug 2023</h5>
                                <div className="roadmap-text">
                                    <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                                </div>
                            </div>  */}
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
            
    );
}
export default Roadmap;