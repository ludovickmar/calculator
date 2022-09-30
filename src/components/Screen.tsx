import "../styles/Screen.css"

function Screen(props:any) {
    console.log(props.equation)
    return (
        <div>
            <div className="screen">
                <input readOnly type="text" value={props.equation}/>
            </div>
        </div>
    )
}

export default Screen