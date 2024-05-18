import React from "react";
export function CalculatorButton({onClick,value}){
    return(
        <button value={value} onClick={()=>{onClick(value)}}>{value}</button>
    )
}