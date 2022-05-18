import React from "react";

const Footer = () => {
  return (
    <footer className="nk-footer-bar section section-s tc-light">
      <div className="container container-xxl">
        <div className="row gutter-vr-10px">
          <div className="col-lg-6 order-lg-last text-lg-right">
            <ul className="footer-nav">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of sales</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="copyright-text copyright-text-s2 tc-white">
              COPYRIGHT © 2022 WLID GECKOS PROJECT{" "}
              <a href="#" className="tc-white">
                iO
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
