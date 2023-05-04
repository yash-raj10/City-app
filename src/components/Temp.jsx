import React, { useEffect } from "react";
import Card from "./Card";

const Temp = () => {
  const [searchValue, setSearchaValue] = React.useState("delhi");
  const [weatherInfo, setWeatherInfo] = React.useState("");

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a15b6b795cf50096c524e6faf1199831`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { temp, humidity, pressure } = data.main;
      const { main: mood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        mood,
        name,
        speed,
        country,
        sunset,
      };

      setWeatherInfo(newWeatherInfo);
      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className=" flex justify-center text-center mt-28">
        <div className="search flex justify-center w-full">
          <input
            className=" border-2 p-4 h-8 w-1/3 border-solid rounded-tl-lg rounded-bl-lg border-gray-500"
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            onChange={(e) => setSearchaValue(e.target.value)}
          />
          <button
            className="searchButton w-20  text-center rounded-tr-lg rounded-br-lg  bg-red-400 "
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <Card weatherInfo={weatherInfo} />
    </>
  );
};

export default Temp;
