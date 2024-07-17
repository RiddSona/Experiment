import React from "react";
import ReactDOM from "react-dom";

export default function Navbar(){
    return(
        <nav>
            <h4 className="Left-Item">Riddesh Sonawane</h4>
            <div className="div-align">
                <h4><a className="navbar-elements-spacing">Services</a>
                 <a className="navbar-elements-spacing">Services</a>
                  <a className="navbar-elements-spacing">Services</a> 
                  <a className="navbar-elements-spacing">Services</a> </h4>     
            </div>
            <h4 className="Right-Item">Menu</h4>
        </nav>
    )
}