import { Clock,Quote,Weather} from "../components"
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
        <div>
            <div className="weatherAndClock">
            <Clock />
            <div>
            <a href="#"><button className="firefox-btn">Add to Firefox</button></a>
            </div>
            <Weather />
            </div> 
            {username === null ? <div>
            <h1>Konnichiwa, What's your name ?</h1>
            <h1><input type="text" onKeyPress={userNameHandler}/></h1>
            </div>:<AfterOnboarding />}    
            <div className="quote-container">    
            <Quote />
            </div>  
        </div>
    )
}