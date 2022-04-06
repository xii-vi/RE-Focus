import { createContext, useContext, useState,useEffect } from "react";

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    const [temperature, setTemperture] = useState("")
    const [location, setLocation] = useState("")
    const [weatherIcon, setWeatherIcon] = useState("")
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`).then((res) => res.json()).then((data) => {
        console.log(data)   
        const {name, main, weather} = data
            setLocation(name);
            setTemperture(Math.round((main.temp)-273.15));
            setWeatherIcon(weather[0].icon);
        })
    },[latitude, longitude, location, weatherIcon])
    return (
        <WeatherContext.Provider value={{
            temperature, setTemperture,
            location, setLocation,
            weatherIcon, setWeatherIcon,
            latitude, setLatitude,
            longitude, setLongitude
        }}>
            {children}
        </WeatherContext.Provider>
    )
}
const useWeather = () => useContext(WeatherContext)

export {WeatherProvider, useWeather}