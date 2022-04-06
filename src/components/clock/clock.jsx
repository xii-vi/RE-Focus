import { useEffect } from "react";
import { useTime } from "../../context/timeContext"

export const Clock=()=> {
    const {time, getTime} = useTime();
    useEffect(getTime);

    return (
    <div className="clock">
        <h1>{time.slice(0, -3)}</h1>
    </div>
    );
}