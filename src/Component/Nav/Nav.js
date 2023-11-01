import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom'


export default function Nav(){
    return(
        <div className="nav-container">
            <div className="content-container"> 
                <button className="home">
                    <Link className="about-text" to='/'>
                        Home
                    </Link>
                </button>

                <button className="article">
                    <Link className="about-text" to='/article'>
                        Article
                    </Link>
                </button>

                <button className="project">
                    <Link className="about-text" to='/project'>
                        Project
                    </Link>
                </button>

                <button className="youtube">
                    <Link className="about-text" to='/youtube'>
                        YouTube
                    </Link>
                </button>
            </div>
        </div>
    )
}