import LogoImg from "/image/logo-only.png";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useValues } from "../Context";
import React from "react";

function Footer() {
  const { contactData, footerData } = useValues();

  return (
    contactData.success &&
    footerData.success && (
      <footer className="footer">
        <div className="logo">
          <div className="flex">
            <img src={LogoImg} alt="Image logo" />
            <span>Workceptive</span>
          </div>
        </div>
        <div className="footer-links">
          <div className="links">
            {footerData.data.map((element, index) => {
              return (
                <FooterLinks
                  key={index}
                  section={element.Section}
                  links={element.Link}
                />
              );
            })}
          </div>
          <div className="footer-address">
            <div className="foot-container">
              <div>
                <p className="phone">{contactData.data.phone}</p>
                <a href={"mailto:" + contactData.data.email} className="email">
                  {contactData.data.email}
                </a>
              </div>
              <address className="address">{contactData.data.address}</address>
            </div>

            <div className="social-icons">
              <ul>
                <li>
                  <a href="/facebook">
                    <AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a href="/facebook">
                    <AiFillTwitterSquare />
                  </a>
                </li>
                <li>
                  <a href="/facebook">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="/facebook">
                    <AiFillFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="foot">
          <p>Copyright 2022 Workceptive. All rights reserved.</p>
          <ul>
            <li>
              <a href="/terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    )
  );
}

function FooterLinks({ section, links = [] }) {
  return (
    <div className="items">
      <h4>{section}</h4>
      <ul>
        {links.map((ele, index) => {
          return (
            <li key={index}>
              <Link className="footer-link" to={ele.Link}>
                {ele.Heading}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(Footer);
