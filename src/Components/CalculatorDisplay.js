import React from "react";
import './Calculator.css';
export function CalculatorDisplay({value}){
    return(
        <input className="display" type="text" value={value}/>
    )
}
