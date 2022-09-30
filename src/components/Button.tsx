import "../styles/Button.css"
import {useState} from "react";


function Button(props:any){
    const sendData = () => {
        props.onButtonClick(props.value)
    }
    return(
        <input className="button grid-item" type="button" value={props.value} onClick={sendData}/>
    )
}

export default Button