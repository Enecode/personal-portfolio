import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom'


export default function Nav(){
    return(
        <div className="nav-container">
            <div className="content-container"> 
                <button className="about">
                <Link className="about-text" to='/about'>
                About
                </Link>
                    
                </button>
                
                <button className="inspiration">
                <Link className="about-text" to='/inspiration'>
                Inspiration
                </Link></button>
            </div>
        </div>
    )
}