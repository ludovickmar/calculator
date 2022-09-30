import "../styles/ButtonPad.css"
import Button from "./Button";
import "../mathFunctions"

function sayHello() {
    alert('Hello!');
}

function onClick(elem:any) {
    var $this = elem.value;
}

function ButtonPad() {
    return (
        <div>
            <div className="grid-container">
                <div></div>
                <Button value="." id="dot"/>
                <Button value="C" id="erase"/>
                <Button value="1" id="one"/>
                <Button value="2" id="substract"/>
                <Button value="3" id="substract"/>
                <Button value="4" id="substract"/>
                <Button value="5" id="substract"/>
                <Button value="6" id="substract"/>
                <Button value="7" id="substract"/>
                <Button value="8" id="substract"/>
                <Button value="9" id="substract"/>
                <Button value="+" id="add"/>
                <Button value="0" id="substract"/>
                <Button value="/" id="substract"/>
                <Button value="-" id="substract"/>
                <Button value="=" id="equals"/>
                <Button value="*" id="multiply"/>
            </div>
        </div>
    )
}

export default ButtonPad