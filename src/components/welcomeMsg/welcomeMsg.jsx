import { useEffect, useState } from "react";
import { useTime } from "../../context/timeContext"

export const WelcomeMsg =()=> {
    const {time} = useTime(); 
    const [welcomeMsg, setWelcomeMsg] = useState("");
    const username = localStorage.getItem("userName");
    useEffect(() => {
        if(time.slice(0,-6) <= 11) {
            setWelcomeMsg("Good Morning")
        }
        if(time.slice(0,-6) > 11 && time.slice(0,-6) < 17 ) {
            setWelcomeMsg("Good Afternoon")
        }
        if(time.slice(0,-6) >= 17) {
            setWelcomeMsg("Good Evening")
        }
    },[time])

    return (
        <h1>{welcomeMsg}, {username} !!</h1>
    );
}