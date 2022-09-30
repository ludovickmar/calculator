import "../styles/Button.css"

function Button(props:any){
    return(
        <input className="button grid-item" type="button" value={props.value} id={props.id} onClick={() => alert(props.value)}/>
    )
}

export default Button