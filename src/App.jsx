import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover.jsx";
import Gallery from "./components/Gallery.jsx";
import Destinasi from "./components/Destinasi.jsx";
import Kuliner from "./components/Kuliner.jsx";
import MainLayout from "./components/Layout.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Question from "./components/Question.jsx";
import soundFile from "./assets/sound.mp3";

function App() {
  // useEffect(() => {
  //   const audio = new Audio(soundFile);
  //   audio.play();

  //   return () => {
  //     audio.pause();
  //     audio.currentTime = 0;
  //   };
  // }, []);

  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Cover />
            </MainLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />
        <Route
          path="/destinasi"
          element={
            <MainLayout>
              <Destinasi />
            </MainLayout>
          }
        />
        <Route
          path="/kuliner"
          element={
            <MainLayout>
              <Kuliner />
            </MainLayout>
          }
        />
        <Route
          path="/tentangkami"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path="/quiz"
          element={
            <MainLayout>
              <div>
                <Question
                  question="Dimana letak rumah pengasingan Bung Karno?"
                  options={[
                    "Pulau Ende",
                    "Pulau Galang",
                    "Pulau Weh",
                    "Pulau Nusakambangan",
                  ]}
                  correctAnswer="Pulau Ende"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="Komodo merupakan hewan purba yang masih hidup. Di daerah manakah komodo tinggal?"
                  options={["Bali", "NTT", "Maluku", "Papua"]}
                  correctAnswer="NTT"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="Jagung yang di pipihkan hingga garing merupakan makanan daerah khas?"
                  options={["Lembata", "Bandung", "Tangerang", "Labuan Bajo"]}
                  correctAnswer="Lembata"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="Makanan khas NTT yaitu Sayuran yang dicampur dengan sayuran lainnya mempunyai nama?"
                  options={["Capcay", "Babat Gongso", "Capcai", "Tumis Sayur"]}
                  correctAnswer="Capcay"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="3 Danau yang warnanya sering kali berubah - ubah yang terletak di NTT merupakan dana?"
                  options={[
                    "Danau Toba",
                    "Danau Kelimutu",
                    "Danau Ranau",
                    "Danau Singkarak",
                  ]}
                  correctAnswer="Danau Kelimutu"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="Desa wae rebo memiliki rumah adat yang unik. Nama dari rumah ada tersebut adalah?"
                  options={[
                    "Rumah Gadang",
                    "Rumah Panggung",
                    "Mbaru Niang",
                    "Rumah Toraja",
                  ]}
                  correctAnswer="Mbaru Niang"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="Desa Lamalera merupakan destinasi wisata internasional karena memiliki tradisi yang unik yaitu?"
                  options={[
                    "Pemburu Paus",
                    "Penenun Ikat",
                    "Pemburu Ikan",
                    "Pengrajin Kapal",
                  ]}
                  correctAnswer="Pemburu Paus"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="Dapur alam watuwawer merupakan destinasi wisata yang terletak di?"
                  options={[
                    "Pulau Komodo",
                    "Pulau Sumba",
                    "Pulau Flores",
                    "Pulau Alor",
                  ]}
                  correctAnswer="Pulau Flores"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="Pantai pasir bean terletak di?"
                  options={[
                    "Pulau Komodo",
                    "Pulau Sumba",
                    "Pulau Flores",
                    "Pulau Alor",
                  ]}
                  correctAnswer="Pulau Flores"
                  handleAnswer={handleAnswer}
                />
                <Question
                  question="Pantai yang semua pesisir pantainya berisi bebatuan yang unik merupakan pantai?"
                  options={[
                    "Pantai Koka",
                    "Pantai Pink",
                    "Pantai Pasir Putih",
                    "Pantai Bajau",
                  ]}
                  correctAnswer="Pantai Pink"
                  handleAnswer={handleAnswer}
                />
                <div className="skor">Skor Benar: {score}</div>
              </div>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
