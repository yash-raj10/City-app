import React, { useEffect } from "react";
import "./card.css";

const Card = ({ weatherInfo }) => {
  const [weatherState, setWeatherState] = React.useState("");

  const { temp, humidity, pressure, mood, name, speed, country, sunset } =
    weatherInfo;

  useEffect(() => {
    if (mood) {
      switch (mood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [mood]);

  //converting sec into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let sunsetTime = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="widget m-auto mt-28 just w-[650px] h-[400px]  border-4 border-black border-solid shadow-2xl rounded-3xl">
        <div className="weathericon  h-[50%] text-[100px] flex justify-center items-center ">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo flex justify-between  text-white h-[25%] bg-red-400 ">
          <div className="temprature flex items-center  text-[65px] mr-6">
            <span>{temp}&deg;</span>
          </div>

          <div className="discription flex flex-col w-full h-full justify-center">
            <div className="weathwrCondition uppercase text-[35px] ">
              {mood}
            </div>
            <div className="Place text-[15px]">
              {name}, {country}
            </div>
          </div>

          <div className="Date flex justify-around items-center text-black text-center text-[30px] p-10 bg-gray-500">
            {new Date().toLocaleString()}
          </div>
        </div>

        <div className="extraInfo text-[15px] font-extrabold bg-white h-[25%] flex justify-around pt-5 rounded-3xl">
          <div className="two-sided-section flex ">
            <p className="mr-2 text-[28px]">
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info-leftside">
              {sunsetTime}
              <br />
              Sunset
            </p>
          </div>

          <div className="two-sided-section flex">
            <p className="mr-2 text-[28px]">
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
              {humidity} <br />
              humidity
            </p>
          </div>

          <div className="two-sided-section flex">
            <p className="mr-2 text-[28px]">
              <i className={"wi wi-rain"}></i>
            </p>
            <p className="extra-info-leftside">
              {pressure} <br />
              Pressure
            </p>
          </div>

          <div className="two-sided-section flex">
            <p className="mr-2  text-[28px]">
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className="extra-info-leftside">
              {speed} <br />
              Speed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
