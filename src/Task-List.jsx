import React from "react";
import tasklist from "./task-list.json"
import "./index.css";

let cars = tasklist.Tasks;

 function ListMaker(){
  console.log("Inside ListMaker");
  return(
        <div className="taskDiv">
          {cars.map(car => {
            return(
            <div style={{border: "2px solid blue"}} key={car.id}>
                <div>{car.title}</div>
                <div>{car.priority}</div>
                <div>{car.todo}</div>
            </div>
            )
          }
          )
          }
        </div>
  )
}
 
export default function TaskMaker() {
  console.log("Inside TaskMaker");
  return(
      <ListMaker/>
  )
}



