import React, { useState, useEffect } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({
    current: {
      temp_c: "",
      condition: {
        text: "",
      },
    },
  });

  const WEATHER_API_KEY = "d28710eb3822440fab2161748213010";

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Qarshi&aqi=no`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    };

    fetchData();
  }, []);


  const [hours, setHours] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  

  setInterval(() => {
    setHours(new Date().getHours());
    setMin(new Date().getMinutes());
    setSec(new Date().getSeconds());
  }, 1000);

 

  return (
    <div
      className="weather"
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      <p className="weather__time">
        {" "}
        <b>
          {" "}
          {new Date().getMonth()}.{new Date().getDate()}.
          {new Date().getFullYear()} {hours}
          {sec % 2 === 1 ? ":" : " "}
          {min}{" "}
        </b>
      </p>
      <p className="text">
        <b>Weather: </b> Qarshi {Math.floor(weatherData?.current.temp_c)}°C{" "}
        {weatherData?.current.condition.text}
      </p>
    </div>
  );
}
