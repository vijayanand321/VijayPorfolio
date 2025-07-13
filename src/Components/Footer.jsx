import React, { useEffect, useState } from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { getFooterData } from '../API/FooterApi';
import "./Footer.css";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
        const data =  await getFooterData();
        setFooter(data);
    };

    fetchFooter();
  }, []);

  if (!footer) return null;

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
            <div>
              <p>{footer.address.line1}</p>
              <p>{footer.address.line2}</p>
              <p>{footer.address.line3}</p>
              <p>{footer.address.pincode}</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
              {footer.phone}
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
              <a href={`mailto:${footer.email}`} target="blank">{footer.email}</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>{footer.about}</p>
          <div className="social">
            <a href={footer.facebook} target="blank">
              <FaFacebook size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
            </a>
            <a href={footer.linkedin} target="blank">
              <FaLinkedin size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
            </a>
            <a href={footer.instagram} target="blank">
              <FaInstagram size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
            </a>
            <a href={footer.github} target="blank">
              <FaGithub size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
            </a>
          </div>
          <br />
          <p>{footer.copyrights}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
