import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import wTextImg from "/image/logo-w.png";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useValues } from "../Context";

function Footer() {
  const { contactData, footerData } = useValues();
  return (
    contactData.success &&
    footerData.success && (
      <footer className="footer">
        <section>
          <div
            className="columns"
            style={{ maxWidth: "1400px", marginInline: "auto" }}
          >
            <div className="logo_details">
              <div className="img__container">
                <img src={wTextImg} alt="workceptive logo with text" />
              </div>
              <div className="mail__to">
                <MdEmail className="mail_icon" />
                <div className="email_container">
                  <p className="email__title">Contact us at:</p>
                  <a className="email" href="mailto:info.workceptive.com">
                    {contactData.data.email}
                  </a>
                </div>
              </div>

              <address>
                <span className="title-span">Address: </span>
                <span className="detail-span" style={{ maxWidth: "35ch" }}>
                  {contactData.data.address}
                </span>
              </address>
              <p className="mobile">
                <span className="title-span">Phone: </span>
                {contactData.data.phone}
              </p>
            </div>
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
          </div>
        </section>

        <hr className="divider" />

        <section className="columns-bottom">
          <div className="social">
            <h4>Follow us on:</h4>
            <span>
              <a href="https://twitter.com">
                <AiFillTwitterCircle />
              </a>
              <a href="https://instagram.com">
                <AiOutlineInstagram />
              </a>
              <a href="https://linkedin.com">
                <AiFillLinkedin />
              </a>
            </span>
          </div>
          <div className="termsDetails">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
            <a href="/return">Return Policy</a>
          </div>
          <p className="copyright">Copyright &copy; 2022 Workceptive. </p>
        </section>
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
              <Link to={ele.Link}>{ele.Heading}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
