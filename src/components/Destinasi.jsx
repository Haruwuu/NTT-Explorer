import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Destinasi1 from "../assets/pulaupadar.jpg";
import Destinasi2 from "../assets/komodo.jpg";
import Destinasi3 from "../assets/desaadat.jpg";
import Destinasi4 from "../assets/pengasingan.jpeg";
import Destinasi5 from "../assets/danaukelimutu.jpg";
import Destinasi6 from "../assets/batubiru.jpg";
import Destinasi7 from "../assets/bean.jpg";
import Destinasi8 from "../assets/dapuralam.jpg";
import Destinasi9 from "../assets/kampung.jpg";


const Destinasi = () => {
    return (
        <>
        <div className="destinasi min-vh-100 d-flex align-items-center">
            <Container>
                <Row>
                    <Col>
                        <h2 className="fw-bold text-center">Destinasi yang Wajib Dikunjungi di Nusa Tenggara Timur</h2>
                    </Col>
                </Row>
                <Row className="rows-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
                    <Col>
                        <div className="image-container">
                            <img src={Destinasi1} alt="Pulau Padar" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Pulau Padar</h5>
                                    <p>Pulau Padar adalah pulau kecil yang terletak di Kepulauan Komodo. Terkenal karena keindahan alamnya, pulau ini menawarkan pemandangan panorama yang menakjubkan dari atas bukit, pantai pasir putih, dan air laut yang jernih. Salah satu daya tarik utamanya adalah trekking menuju puncak bukit, yang menyajikan pemandangan tiga teluk dengan warna air yang berbeda.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Destinasi2} alt="Taman Nasional Komodo" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Taman Nasional Komodo</h5>
                                    <p>Taman Nasional Komodo adalah kawasan konservasi di Kepulauan Komodo, Nusa Tenggara Timur, terkenal karena kadal komodo. Selain melindungi kadal, taman nasional juga menjaga keanekaragaman hayati laut dan darat. Pengunjung dapat menikmati trekking, snorkeling, dan diving di sini. Pulau Rinca dan Pulau Komodo menjadi atraksi utama.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Destinasi3} alt="Desa Adat Wae Rebo" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Desa Adat Wae Rebo</h5>
                                    <p>Desa Adat Wae Rebo adalah desa tradisional di lereng Gunung Rinjani, Nusa Tenggara Timur. Terkenal dengan rumah adatnya yang unik, "Mbaru Niang", desa ini merupakan salah satu desa adat tertua di daerah itu. Pengunjung bisa menikmati perjalanan trekking untuk mencapai desa ini dan merasakan kehidupan dan budaya tradisional masyarakat Manggarai.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Destinasi4} alt="Rumah Pengasingan Bung Karno" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Rumah Pengasingan Bung Karno</h5>
                                    <p>Rumah Pengasingan Bung Karno di NTT adalah tempat di mana Presiden pertama Indonesia diasingkan oleh pemerintah Belanda pada tahun 1938-1939. Terletak di desa Ende, Pulau Flores, tempat ini menjadi objek wisata sejarah yang menarik bagi pengunjung yang ingin memahami lebih lanjut perjuangan kemerdekaan Indonesia.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Destinasi5} alt="Danau Kelimutu" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Danau Kelimutu</h5>
                                    <p>Danau Kelimutu terletak di Pulau Flores, Nusa Tenggara Timur, menarik perhatian sebagai tujuan wisata alam karena perubahan warna airnya yang periodik. Tiga kawahnya memiliki air dengan warna berbeda: biru, hijau, dan merah/hitam. Masyarakat setempat percaya bahwa perubahan warna disebabkan oleh aktivitas vulkanik dan senyawa kimia di air.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Destinasi6} alt="Pantai Batu Biru" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Pantai Batu Biru</h5>
                                    <p>Pantai Batu Biru di daerah Ende terkenal dengan batu-batu besar berwarna biru yang mencolok. Terletak di Pulau Flores, pantai ini menawarkan pemandangan alam spektakuler dengan pasir putih, air laut jernih, dan formasi batu yang unik. Pantai ini menjadi favorit wisatawan yang ingin menikmati keindahan alam Nusa Tenggara Timur.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Destinasi7} alt="Pantai Pasir Putih Bean" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Pantai Pasir Putih Bean</h5>
                                    <p>Pantai Pasir Putih Bean adalah sebuah pantai indah yang terletak di Pulau Lembata, Nusa Tenggara Timur. Pantai ini terkenal dengan pasir putihnya yang bersih, air laut yang jernih, dan pemandangan alam yang memukau. Bean menawarkan suasana tenang dan alami, cocok untuk bersantai, berenang, atau snorkeling.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Destinasi8} alt="Dapur Alam Watuwawer" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Dapur Alam Watuwawer</h5>
                                    <p>Dapur Alam Watuwawer adalah destinasi wisata kuliner di Pulau Lembata, Nusa Tenggara Timur, yang menawarkan pengalaman makan di alam terbuka dengan pemandangan indah. Pengunjung dapat menikmati hidangan lokal khas yang disiapkan dari bahan-bahan segar setempat, sambil merasakan kekayaan budaya kuliner Lembata.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="image-container">
                            <img src={Destinasi9} alt="Kampung Lamalera" className="w-100" />
                            <div className="overlay">
                                <div className="text">
                                    <h5>Kampung Lamalera</h5>
                                    <p>Kampung Lamalera di Pulau Lembata, Nusa Tenggara Timur, terkenal dengan tradisi berburu paus yang telah berlangsung berabad-abad lamanya. Menggunakan peralatan sederhana seperti tombak dan perahu kayu, masyarakat setempat berburu paus sperma sebagai sumber makanan utama, yang juga melibatkan upacara adat dan nilai spiritual.</p>
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

export default Destinasi;
