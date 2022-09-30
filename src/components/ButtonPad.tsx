import "../styles/ButtonPad.css"
import Button from "./Button";
import "../mathFunctions"

function ButtonPad(props:any) {
    return (
        <div>
            <div className="grid-container">
                <div></div>
                <Button value="." onButtonClick={props.onButtonClick}/>
                <Button value="C" onButtonClick={props.onButtonClick}/>
                <Button value="1" onButtonClick={props.onButtonClick}/>
                <Button value="2" onButtonClick={props.onButtonClick}/>
                <Button value="3" onButtonClick={props.onButtonClick}/>
                <Button value="4" onButtonClick={props.onButtonClick}/>
                <Button value="5" onButtonClick={props.onButtonClick}/>
                <Button value="6" onButtonClick={props.onButtonClick}/>
                <Button value="7" onButtonClick={props.onButtonClick}/>
                <Button value="8" onButtonClick={props.onButtonClick}/>
                <Button value="9" onButtonClick={props.onButtonClick}/>
                <Button value="+" onButtonClick={props.onButtonClick}/>
                <Button value="0" onButtonClick={props.onButtonClick}/>
                <Button value="/" onButtonClick={props.onButtonClick}/>
                <Button value="-" onButtonClick={props.onButtonClick}/>
                <Button value="=" onButtonClick={props.onButtonClick}/>
                <Button value="*" onButtonClick={props.onButtonClick}/>
            </div>
        </div>
    )
}

export default ButtonPad