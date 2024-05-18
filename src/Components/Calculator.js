import React from "react";
import { useState } from "react";
import { CalculatorButton } from "./CalculatorButton";
import { CalculatorDisplay } from "./CalculatorDisplay";
export function Calculator(){
    const [displayValue,setDisplayValue]=useState("");
    const handleButtonClick=(value)=>{
        if(value==='='){
            calculateResult();
        }
        else if(value==='C'){
            clearDisplay();
        }
        else{
            setDisplayValue((prevValue)=>prevValue+value);
        }
    }
    const calculateResult=()=>{
        try{
            const result=eval(displayValue);
            setDisplayValue(result.toString());
        }
        catch(error){
            setDisplayValue("Error");
        }
    }
    const clearDisplay=()=>{
        setDisplayValue("");
    }
    return(
        <div className="calculator">
            <CalculatorDisplay value={displayValue}/>
            <div className="keys">
                <div className="row">
                    <CalculatorButton value="7" onClick={handleButtonClick}/>
                    <CalculatorButton value="8" onClick={handleButtonClick}/>
                    <CalculatorButton value="9" onClick={handleButtonClick}/>
                    <CalculatorButton value="+" onClick={handleButtonClick}/>
                </div>
                <div className="row">
                    <CalculatorButton value="4" onClick={handleButtonClick}/>
                    <CalculatorButton value="5" onClick={handleButtonClick}/>
                    <CalculatorButton value="6" onClick={handleButtonClick}/>
                    <CalculatorButton value="-" onClick={handleButtonClick}/>
                </div>
                <div className="row">
                    <CalculatorButton value="3" onClick={handleButtonClick}/>
                    <CalculatorButton value="2" onClick={handleButtonClick}/>
                    <CalculatorButton value="1" onClick={handleButtonClick}/>
                    <CalculatorButton value="*" onClick={handleButtonClick}/>
                </div>
                <div className="row">
                    <CalculatorButton value="C" onClick={handleButtonClick}/>
                    <CalculatorButton value="0" onClick={handleButtonClick}/>
                    <CalculatorButton value="/" onClick={handleButtonClick}/>
                    <CalculatorButton value="=" onClick={handleButtonClick}/>
                 </div>
            </div>
        </div>
    )
}