import "./WeatherForecast.css";
import WeatherData from "./WeatherData";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = (props) => {
  return (
    <>
      <div className="weather">
        <WeatherIcon
          img={props.weatherForecast.img}
          imgAlt={props.weatherForecast.imgAlt}
        />
        <WeatherData
          day={props.weatherForecast.day}
          conditions={props.weatherForecast.conditions}
          time={props.weatherForecast.time}
        />
      </div>
    </>
  );
};

export default WeatherForecast;
