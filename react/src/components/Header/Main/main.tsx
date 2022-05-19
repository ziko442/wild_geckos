/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function scrollToTestDiv(secTo: any) {
  // const divElement = document.getElementById(secTo);
  // divElement.scrollIntoView({ behavior: 'smooth' });

  document.getElementById(secTo)?.scrollIntoView();
  window.location.replace("/#" + secTo);
}

const Main = () => {
  return (
    <React.Fragment>
      {/* <!-- .header-main @e --> */}
      <div className="banner banner-fs tc-light">
        <div className="nk-block nk-block-header nk-block-sm my-auto">
          <div className="container pt-5">
            <div className="banner-caption text-center">
              <h1
                className="title title-xl-2 ttu animated"
                data-animate="fadeInUp"
                data-delay="0.7"
              >
                Welcome to our jungle where Wild Geckos are hungry for success
                and fortune
              </h1>
              <div className="row justify-content-center pb-3">
                <div className="col-sm-11 col-xl-11 col-xxl-8">
                  <p
                    className="text-white lead animated"
                    data-animate="fadeInUp"
                    data-delay="0.8"
                  >
                    This project aims to make the crypto world and games more
                    entertaining and productive. There is a collection of NFTs
                    drawn by skilled artists and with sophisticated tools.
                    Digital collectibles born on the Solana Blockchain. Owning a
                    Wild Gecko gives you access to play the game and gain
                    tokens.{" "}
                  </p>
                </div>
              </div>
              <div className="cpn-action">
                <ul className="btn-grp gutter-vr-20px pdt-m">
                  <li
                    className="animated"
                    data-animate="fadeInUp"
                    data-delay="0.6"
                  >
                    <a
                      href="#tokensale"
                      className="menu-link btn btn-welcome btn-round btn-md"
                    >
                      TOKEN SALE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-block nk-block-status">
          <div className="container container-xxl">
            <div className="row gutter-vr-40px justify-content-between">
              <div className="col-xxl-6 col-xl-5 col-lg-5">
                <div
                  className="progress-wrap progress-wrap-point animated"
                  data-animate="fadeInUp"
                  data-delay="0.8"
                >
                  <ul className="progress-info progress-info-s2">
                    <li className="tc-white">
                      Raised - <span className="text-white">1,1250 Tokens</span>
                    </li>
                    <li className="text-right tc-white">
                      Target -{" "}
                      <span className="text-white">150,000 Tokens</span>
                    </li>
                  </ul>
                  <div className="progress-bar progress-bar-xs">
                    <div
                      className="progress-percent progress-percent-s2"
                      data-percent="30"
                    ></div>
                    <div className="progress-point tc-white" data-point="25">
                      Soft Cap
                    </div>
                    <div className="progress-point tc-white" data-point="55">
                      Crowdsale
                    </div>
                    <div className="progress-point tc-white" data-point="85">
                      Hard Cap
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-7 text-center text-sm-left">
                <div className="row justify-content-around gutter-vr-30px">
                  <div className="col-sm-4 col-md-6 col-lg-4 col-xl-5">
                    <div
                      className="status-info animated"
                      data-animate="fadeInUp"
                      data-delay="0.9"
                    >
                      <h6 className="title title-xxs tc-default status-title ttu">
                        Current Bonus
                      </h6>
                      <h3 className="fz-3 fw-3 status-percent">20%</h3>
                      <div className="fz-8 tc-white">
                        Contributors can receive
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8 col-md-6 col-lg-7 col-xl-7">
                    <div
                      className="status-countdown float-sm-right animated"
                      data-animate="fadeInUp"
                      data-delay="1"
                    >
                      <h6 className="title title-xxs tc-default status-title ttu">
                        The Bonus ends in
                      </h6>
                      <div
                        className="countdown justify-content-center justify-content-sm-start countdown-s3 countdown-s3-alt"
                        data-date="2021/08/10"
                        data-min-text="Minutes"
                        data-sec-text="Seconds"
                      ></div>
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
                  <li
                    className="animated"
                    data-animate="fadeInUp"
                    data-delay="0.8"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                      className="link link-light link-break video-popup"
                    >
                      <em className="icon-circle icon-border icon-animation fas fa-play"></em>
                      <span>How it Works</span>
                    </a>
                  </li>
                  <li
                    className="animated"
                    data-animate="fadeInUp"
                    data-delay="0.9"
                  >
                    <a href="#" className="link link-light link-break">
                      <em className="icon-circle icon-border far fa-lightbulb"></em>
                      <span>Why buy Tokens now?</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-5">
                <ul
                  className="social-links social-links-s2 justify-content-center justify-content-sm-end animated"
                  data-animate="fadeInUp"
                  data-delay="1"
                >
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-medium-m"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-youtube"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-bitcoin"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-github"></em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Place Particle Js --> */}
        <div
          id="particles-bg"
          className="particles-container is-fixed particles-bg op-20"
        ></div>
      </div>
    </React.Fragment>
  );
};

export default Main;
