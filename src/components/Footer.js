import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";

import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import email from "../assets/img/gmail.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="centro">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/marco-asto-rojas-07a319235/" target={"_blank"}><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/marcoastorojas" target={"_blank"}><img src={github} alt="Icon" /></a>
              <a href="mailto:marcoasto123@gmail.com" target={"_blank"}><img src={email} alt="Icon" /></a>
            </div>
        </div>
      </Container>
    </footer>
  )
}
