import { createContext, useContext, useState } from "react";

const TimeContext = createContext()

const TimeProvider = ({children}) => {

    const [time, setTime] = useState("")
    const getTime=()=> {
        setTimeout(() => {
            const date = new Date();
            const time = date.toLocaleTimeString('en-GB');
            setTime(time)
        }, 1000);
    }

    return (
        <TimeContext.Provider value={{time, getTime}}>
            {children}
        </TimeContext.Provider>
    )
}

const useTime = () => useContext(TimeContext)

export {TimeProvider, useTime}