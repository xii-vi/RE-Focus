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
            <Weather />
            <Clock />
            {username === null ? <div>
            <h1>Konnichiwa, What's your name ?</h1>
            <h1><input type="text" onKeyPress={userNameHandler}/></h1>
            </div>:<AfterOnboarding />}          
            <Quote />
        </div>
    )
}