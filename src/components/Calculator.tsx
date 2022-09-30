import "../styles/Calculator.css"
import Screen from "./Screen"
import ButtonPad from "./ButtonPad";
import React, { useState } from 'react';

function calculate(equation:string[]):number{
    let total:number=0
    for(let elem in equation){

    }
    return total
}


function Calculator() {
    const initialEquation:string[]=[]
    const [equation, setEquation] = useState(initialEquation);

    return(
        <div className="calculator">
            <Screen equation={equation.toString().replaceAll(",","")}/>
            <ButtonPad onButtonClick={(value: string) => {
                if(value==="="){
                    console.log("EGAL")
                    let totalEquation:string[]=[]
                    totalEquation.push(calculate(equation).toString())
                    setEquation(totalEquation)
                }
                else if(value==="C"){
                    console.log("C")
                    setEquation(initialEquation)
                }
                else {
                    setEquation([...equation, value])
                    console.log(value)
                    console.log(equation)
                }

            }}/>
        </div>
    )
}

export default Calculator