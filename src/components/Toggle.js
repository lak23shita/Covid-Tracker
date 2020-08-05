import React ,{useState,useEffect} from 'react'
import './Toggle.css';
function Toggle() {
    const [dark,setMode] = useState(false)
    return (
        // <div className={dark? "dark_mode": "shh"}>
            <div className="nav">
            <label className="switch">
            <input type="checkbox"
            onChange={()=>setMode(!dark)}
            /> 
            <span className="slider round"></span>
            </label>
            </div>
        // </div>
    )
}

export default Toggle
