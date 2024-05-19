import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "./Gallery";
const Cover = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url =
        "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=121.07&lat=-8.65";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a046b6bcb5msh2bd3a3de2265f32p1a7b32jsn3c9779cbea31",
          "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        let data;
        data = {
          city_name: result.data[0].city_name,
          ob_time: result.data[0].ob_time,
          temp: result.data[0].temp,
        };
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <div className="cover min-vh-100 w-100">
        <Container>
          <Row>
            <Col className="text-white text-center">
              <h1>Welcome to NTT Explorer</h1>
              <p className="text-white-50">
                NTT Explorer adalah sebuah website yang mengajak Anda untuk
                menjelajahi keindahan alam dan kekayaan budaya Nusa Tenggara
                Timur. Dengan menyajikan berbagai informasi dan pengalaman yang
                menarik, kami berharap dapat menginspirasi Anda untuk
                mengeksplorasi dan menikmati pesona NTT.{" "}
              </p>
              {weatherData && (
                <div className="weather-info">
                  <h2>Cuaca</h2>
                  <p>
                    {weatherData.city_name} {weatherData.temp}°C,{" "}
                    {weatherData.ob_time}
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Gallery />
    </>
  );
};

export default Cover;
