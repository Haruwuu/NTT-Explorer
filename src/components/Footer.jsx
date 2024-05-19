import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer pb-3 pt-4">
        <Container>
          <Row className="align-items-center">
            <Col>
              <img
                src={Logo}
                alt="NTT Explorer Logo"
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
                style={{ verticalAlign: "middle" }}
              />
              <h3 className="fw-bold text-white d-inline-block align-middle mb-0">
                NTT Explorer.
              </h3>
            </Col>
            <Col className="text-end">
              <i className="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2"></i>
              <i className="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i>
              <i className="fa-brands fa-tiktok text-white fs-1 mx-lg-3 mx-2"></i>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="text-white">
                Jelajahi keindahan NTT bersama kami!
              </h6>
              <h6 className="text-white">
                #Temukan destinasi tersembunyi, budaya unik, dan keindahan alam
                yang memukau.
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center text-white-50">
                &copy; Pejuang Nilai 2024, All Right Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
