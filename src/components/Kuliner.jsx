import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Kuliner1 from "../assets/kompyang.jpg";
import Kuliner2 from "../assets/rampe.jpg";
import Kuliner3 from "../assets/kolo.jpg";
import Kuliner4 from "../assets/alundene.jpg";
import Kuliner5 from "../assets/uwi.jpg";
import Kuliner6 from "../assets/sei.png";
import Kuliner7 from "../assets/titi.jpg";
import Kuliner8 from "../assets/balelang.jpg";
import Kuliner9 from "../assets/bose.jpg";


const Kuliner = () => {
    return (
        <>
        <div className="kuliner min-vh-100 d-flex align-items-center">
            <Container>
                <Row>
                    <Col>
                        <h2 className="fw-bold text-center">Kuliner yang Wajib Dicicipi di Nusa Tenggara Timur</h2>
                    </Col>
                </Row>
                <Row className="rows-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
                    <Col>
                        <div className="image-container">
                            <img src={Kuliner1} alt="Kompyang" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Kompyang</h5>
                                    <p>Kompyang adalah roti tradisional khas Labuan Bajo, Nusa Tenggara Timur. Roti ini berbentuk bulat, memiliki tekstur kenyal, dan rasa gurih dengan taburan wijen di atasnya. Kompyang sering dinikmati sebagai camilan atau pendamping makanan, dan merupakan salah satu kuliner khas yang populer di Labuan Bajo.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Kuliner2} alt="Rumpu Rampe" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Rumpu Rampe</h5>
                                    <p>Rumpu Rampe adalah camilan khas Labuan Bajo, Nusa Tenggara Timur. Terbuat dari campuran tepung beras, kelapa parut, gula, dan rempah-rempah seperti jahe atau kayu manis. Camilan ini memiliki tekstur renyah di luar dan lembut di dalam, dengan aroma rempah yang khas.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Kuliner3} alt="Kolo" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Kolo</h5>
                                    <p>Kolo merupakan makanan khas yang terbuat dari bahan utama olahan beras yang dimasak dengan menggunakan bantuan batang bambu. Makanan ini juga biasa disebut dengan nasi bambu ataupun nasi bakar. Disebut demikian karena dalam proses memasaknya, nasi tersebut akan dimasukkan kedalam bambu lalu dimasak dengan cara dibakar.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Kuliner4} alt="Alu Ndene" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Alu Ndene</h5>
                                    <p>Alu Ndene adalah makanan tradisional khas dari Nusa Tenggara Timur. Terbuat dari campuran tepung ketan, kelapa parut, dan gula merah, kemudian dibungkus dengan daun pisang dan dikukus. Memiliki tekstur kenyal dan manis, sering dihidangkan sebagai camilan atau hidangan penutup dalam berbagai acara atau sebagai makanan sehari-hari di daerah tersebut.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Kuliner5} alt="Uwi ai ndota" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Uwi ai ndota</h5>
                                    <p>Uwi ai ndota dalam bahasa daerah Nusa Tenggara Timur artinya mengacu pada sayur atau rebusan daun ubi. Sayuran ini biasanya dimasak dengan tambahan kelapa parut dan kadang-kadang disertai dengan bumbu lain seperti bawang merah, cabai, dan terasi untuk memberikan rasa yang khas. Uwi ai ndota sering dihidangkan sebagai lauk pendamping nasi dalam makanan sehari-hari.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Kuliner6} alt="Se'i Sapi" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Se'i Sapi</h5>
                                    <p>Se'i Sapi, hidangan khas dari Nusa Tenggara Timur (NTT), terbuat dari daging sapi yang diasinkan dan diasapkan secara tradisional. Prosesnya dimulai dengan perendaman daging sapi dalam garam, lalu dijemur di bawah sinar matahari atau dianginkan untuk mengeringkannya. Setelah proses pengasinan selesai, daging diasap menggunakan kayu bakar untuk memberikan aroma dan rasa yang khas.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Kuliner7} alt="Jagung Titi" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Jagung Titi</h5>
                                    <p>Jagung Titi adalah makanan kuliner khas yang berasal dari Nusa Tenggara Timur, terutama di Pulau Flores bagian timur seperti di Solor, Adonara, Alor, dan Lembata. Dinamakan jagung Titi karena proses pengolahan biji jagung tersebut dititi diatas batu.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Kuliner8} alt="Ikan Balelang" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Ikan Balelang</h5>
                                    <p>Ikan Balelang adalah ikan khas di wilayah Nusa Tenggara Timur (NTT), terutama di Pulau Flores bagian timur seperti di Solor, Adonara, Alor, dan Lembata. Ikan ini diperoleh dari laut, kemudian dikeringkan dengan panas matahari.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Kuliner9} alt="Jagung Bose" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5 className="fw-bold">Jagung Bose</h5>
                                    <p>Jagung bose adalah sebuah olahan jagung berupa bubur jagung unik yang juga merupakan hidangan tradisional dari Nusa Tenggara Timur. Bubur yang juga mengandung campuran daging se'i ini biasa juga dimakan bersama ikan bakar sebagai ganti nasi.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default Kuliner;
