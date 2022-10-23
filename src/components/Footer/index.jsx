import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../../images/footer-logo.png"
import "./style.scss";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-4">
            <p className="footer-heading">
              Get in touch with us for your service
            </p>
            <div className="social-link">
              <Link to="/">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="/">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to="/">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <ul>
              <li>
                <span className="small-text">Help line Number</span>
                <span className="bold-text">1800 265 24 52</span>
              </li>
              <li>
                <span className="small-text">Address</span>
                <span className="bold-text">
                  NH 234 Public Square San Francisco 65368
                </span>
              </li>
              <li>
                <span className="small-text">We are opene</span>
                <span className="bold-text">
                  Monday to Friday 9:00 AM to  10:00  AM
                </span>
              </li>
            </ul>
          </div>
          {/* <div className="col-sm-12"></div> */}
        </div>
      </div>

      <div className="footer-end">
							<div className="container">
							<img src={footerlogo} alt="" className="footer-logo" />
        <ul>
          <li>
            <Link>Home </Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Services </Link>
          </li>
										<li>
            <Link>Blog </Link>
          </li>
										<li>
            <Link>Contact us </Link>
          </li>
        </ul>
								<p className="copy-right">@ Copyright Finsweet 2021</p>
							</div>
      
      </div>
    </div>
  );
};

export default Footer;
