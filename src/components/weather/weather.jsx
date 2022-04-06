import { useWeather } from "../../context"

export const Weather=()=> {
    const {
        temperature, 
        location, 
        weatherIcon, 
        setLatitude,
        setLongitude
    } = useWeather();

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    })
    
    return <div className="weather">
        <div className="weatherIcon">
            <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="Weather-Icon"/>
        </div>
        <div className="temp">{temperature}<span>&deg;</span></div>
        <div className="location">{location}</div>
    </div>;
}