import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery1 from "../assets/galeri.jpg";

const Gallery = () => {
    return (
        <>
        <div className="gallery min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="rows-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
                    <Col className="galleryimg">
                        <img src={Gallery1}  alt="NTT" className="w-100"/>
                    </Col>
                    <Col>
                        <p style={{ textAlign: "justify" }}>Nusa Tenggara Timur (NTT) adalah sebuah provinsi di Indonesia yang terletak di bagian timur Kepulauan Nusa Tenggara. Ibu kota provinsi ini adalah Kota Kupang. NTT terdiri dari 22 kabupaten/kota. Pada tahun 2022, provinsi ini memiliki jumlah penduduk sebesar 5.446.285 jiwa dengan kepadatan penduduk sekitar 114 jiwa per kilometer persegi. NTT berada di Kepulauan Sunda Kecil dan dikenal dengan keindahan alamnya, termasuk pulau-pulau eksotis dan berbagai destinasi wisata menarik, serta makanan khas yang unik.</p>
                        <p style={{ textAlign: "justify" }}>Daerah <b>Ende, Labuan Bajo,</b> dan <b>Lembata</b> di Nusa Tenggara Timur (NTT) adalah destinasi yang patut dikunjungi. Ende terkenal dengan Danau Kelimutu dan sejarahnya sebagai tempat pengasingan Bung Karno. Labuan Bajo adalah gerbang menuju Pulau Komodo, menawarkan kegiatan snorkeling dan diving yang menakjubkan. Lembata terkenal dengan tradisi penangkapan ikan paus di Lamalera serta keindahan alamnya yang menakjubkan. Jelajahi NTT untuk pengalaman alam yang luar biasa dan nikmati kuliner tradisionalnya yang autentik.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default Gallery;
