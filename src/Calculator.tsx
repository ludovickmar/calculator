import "./Calculator.css"
import Screen from "./Screen"
import ButtonPad from "./ButtonPad";
function Calculator() {
    return(
        <div className="calculator">
            <Screen />
            <ButtonPad />
        </div>
    )
}

export default Calculator