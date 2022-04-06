import { Clock,Quote,Weather,WelcomeMsg} from "../components"

export const UserOnboard =()=>{
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
            <div>
            <h1>Konnichiwa, What's your name ?</h1>
            <h1><input type="text" onKeyPress={userNameHandler}/></h1>
            </div>
            <WelcomeMsg />
            <Quote />
        </div>
    )
}