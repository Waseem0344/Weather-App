import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){ 
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike: 31.53,
        temp: 32.05,
        tempMax: 32.05,
        tempMin: 32.05,
        humidity: 35,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Waseem Ali </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}