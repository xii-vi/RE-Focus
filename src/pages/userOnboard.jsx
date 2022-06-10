import { Clock,Quote,Weather,Todos} from "../components"
import { AfterOnboarding } from "./afterOnboarding";

export const UserOnboard =()=>{
    const username = localStorage.getItem("userName");
    const userNameHandler=(e)=> {
        if(e.key === 'Enter'){
            localStorage.setItem("userName", e.target.value)
            window.location.reload(true)
        }
    }
    return(
        <div className="app-layout">
            <div className="weatherAndClock">
            <Clock />
            <Weather />
            </div> 
            <div>
            <a href="https://addons.mozilla.org/en-US/firefox/addon/refocus/"><button className="firefox-btn">Add to Firefox</button></a>
            </div>
            {username === null ? <div>
            <h1>Konnichiwa, What's your name ?</h1>
            <h1><input className="input-container" type="text" onKeyPress={userNameHandler} Required/></h1>
            </div>:<AfterOnboarding />}    
            <div className="center-flex">    
            <Todos />
            <Quote />
            </div>  
        </div>
    )
}