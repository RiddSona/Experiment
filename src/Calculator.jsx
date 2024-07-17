import React, {useState,useReducer} from "react";
import "./index.css";

const ACTION_TYPES = {
     ADD_NUMBER: "add-number",
     SELECT_OPERATOR: "select-operator",
     REMOVE_NUMBER: "remove-number",
     CLEAR_ALL: "clear-all",
     CALCULATE: "calculate"
}

function reducer(){

}

export default function Calculator(){
     const [state, dispatch] = useReducer(reducer, {})
    return(
    <div className="rootDiv">
        <div className="Output">
               <div className="prevOperand">{prevOperand}{Operator}</div>
               <div classNmae="currOperand">{currOperand}</div>
        </div>
        <div>
             <button type="button" className="calNums" value="0">0</button>
             <button type="button" className="calNums" value="1">1</button>
             <button type="button" className="calNums" value="2">2</button>
             <button type="button" className="calNums"value="+">+</button>   
        </div>
        <div>
             <button type="button" className="calNums" value="3">3</button>
             <button type="button" className="calNums" value="4">4</button>
             <button type="button" className="calNums" value="5">5</button>
             <button type="button" className="calNums" value="-">-</button>   
        </div>
        <div>
             <button type="button" className="calNums" value="6">6</button>
             <button type="button" className="calNums" value="7">7</button>
             <button type="button" className="calNums" value="8">8</button>
             <button type="button" className="calNums" value="*">*</button>   
        </div>
        <div>
             <button type="button" className="calNums" value=".">.</button>
             <button type="button" className="calNums" value="9">9</button>
             <button type="button" className="calNums" >=</button>
             <button type="button" className="calNums" value="/">/</button>   
        </div>
    </div>
    )
}