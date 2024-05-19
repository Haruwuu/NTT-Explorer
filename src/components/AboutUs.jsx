import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profil1 from "../assets/andika.jpg";
import profil2 from "../assets/caca.jpg";
import profil3 from "../assets/kevan.jpg";
import profil4 from "../assets/fedora.jpg";

const AboutUs = () => {
  const InstagramProfile = (username) => {
    window.open(`https://www.instagram.com/${username}`, '_blank');
  };

  return (
    <>
      <div className="aboutus min-vh-100 w-100">
        <Container>
          <Row className="judul">
            <Col className="text-dark text-center">
              <h2 className="fw-bold">Profil Anggota Pejuang Nilai</h2>
            </Col>
          </Row>
          <Row className=" teks text-dark text-center justify-content-center rows-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 g-4">
            <Col className="kolomprof">
              <img src={profil1} alt="Andika" className="fotoprof w-100" />
              <p className="fw-semibold">
                Nicholas Andika P. D. <br />
                00000093595
              </p>
              <i
                className="fa-brands fa-instagram text-black fs-1 mx-lg-3 mx-2"
                onClick={() => InstagramProfile('haruwu.coser')}
              ></i>
            </Col>
            <Col className="kolomprof">
              <img src={profil2} alt="Caca" className="fotoprof w-100" />
              <p className="fw-semibold">
                Louissa Sofia A. B. <br />
                00000092122
              </p>
              <i
                className="fa-brands fa-instagram text-black fs-1 mx-lg-3 mx-2"
                onClick={() => InstagramProfile('louissasofia')}
              ></i>
            </Col>
            <Col className="kolomprof">
              <img src={profil3} alt="Kevan" className="fotoprof w-100" />
              <p className="fw-semibold">
                Eugenius Kevan Kusuma <br />
                00000092947
              </p>
              <i
                className="fa-brands fa-instagram text-black fs-1 mx-lg-3 mx-2"
                onClick={() => InstagramProfile('kevan.kusuma')}
              ></i>
            </Col>
            <Col className="kolomprof">
              <img src={profil4} alt="Fedora" className="fotoprof w-100" />
              <p className="fw-semibold">
                Fedora Anestasia <br />
                00000091646
              </p>
              <i
                className="fa-brands fa-instagram text-black fs-1 mx-lg-3 mx-2"
                onClick={() => InstagramProfile('fedorans_')}
              ></i>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
