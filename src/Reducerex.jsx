import React, {useReducer, useState} from "react";
import ReactDOM from "react-dom";

function reducer(state, action){
    console.log(state)
    switch (action.type){
    case 'increement':
    return {c: state.c + 1}
    case 'decreement':
    return {c: state.c - 1}
    }
}


export default function Counter(){

    const [state, dispatch] = useReducer(reducer, { c: 0})

    function decreement(){
        dispatch({type: "decreement"})
    }
    
    function increement(){
        dispatch({type: "increement"})
    }
    return(
        <>
        <button onClick={decreement}>-</button>
        <span>{state.c}</span>
        <button onClick={increement}>+</button>
        </>
    )
}