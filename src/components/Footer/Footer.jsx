import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/1e2977ca1225981e307ad8d2c26a9040-removebg-preview.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img className="FooterLogo" src={logo} alt="logo" />
              <h5>Shopp.my</h5>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: ZindaBazar, Sylhet-3100, India</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 01712345678</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                  <i class="ri-facebook-line"></i>
               {" "}
              </span>

              <span>
                  <i class="ri-github-line"></i>
              </span>

              <span>
                {" "}
                  <i class="ri-youtube-line"></i>
                {" "}
              </span>

              <span>
                {" "}
                  <i class="ri-linkedin-line"></i>
                {" "}
              </span>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Subscribe</h5>
            <p>Subscribe for latest updates</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, website made by Harsha Tejwani. All Rights
              Reserved.
            </p>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
