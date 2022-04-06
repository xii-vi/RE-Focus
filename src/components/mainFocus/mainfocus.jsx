import { useState } from "react";

export const MainFocus=()=> {
    const [edit, setEdit] = useState(false)
    const focusEditHandler = () => setEdit(true)
    const focusEntered = localStorage.getItem('focus');
    
    const mainFocusHandler=(e)=> {
        if(e.key === 'Enter') {
            localStorage.setItem('focus', e.target.value,);
            setEdit(false)
        }
    }

    const EnterMainFocus=()=> {
        return (
            <div>
                <h1>What's your main focus for today ?</h1>
                <h1><input type="text" onKeyPress={mainFocusHandler}/></h1>
            </div>
        )
    }
    const ShowMainFocus=()=> {
        return (
            <div>
                <h1>Your main focus for today is {focusEntered} </h1> 
                <button className="edit-btn" onClick={focusEditHandler}>Edit</button>
            </div>
        )
    }
    return (
    <div >
        { focusEntered === null || edit ? <EnterMainFocus/> : <ShowMainFocus />}
    </div>
    )
}