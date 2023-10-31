import React from "react";
import profile from "../image/myimage.jpg";
import "./about.css";
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Nav from './Nav';



function About(){
    return(
        <div className="profile-about-content">
            <Nav />
            {/* <div className="profile-about-content"> */}
        {/* < div className="profile-about-content"> */}
            <div className="profile-about my-about-image">
                <img src={profile} alt="Isah Jacob" className="profile-image" />
            </div>
            <div className="profile-about">
                <h1 className="myHeading">About Me</h1>
                <h4 className="myHeading">Hi, i'm Jacob.</h4>

                
                <p className="paragraph">I am a software developer with a passion for building web applications. I am proficient in React.js, Python, Javascript and Java. I am also a team player and a fast learner.</p>
                
                <h3 className="myHeading">What I hope to do</h3>

                <p className="paragraph">I hope to work with a team of developers to build amazing web applications that will solve real world problems. As a full-stack engineer, it is my goal to make a positive impact on software and products that enhance and empower people's lives. I really think that by creating tools that give communities more power, we can improve the world through code. Yes, let's change the world together!</p>
                <h3 className="myHeading">What I do for fun</h3>

                <p className="paragraph">On my blog, I publish blog posts. These articles cover a wide range of backend subjects, such as software engineering, Python, and Django. I enjoy using HTML, CSS, and ReactJS to create applications and user interfaces.</p>
                <h3 className="myHeading">What I'm doing</h3>

                <p className="paragraph">I am helping others as I advance in my career by sharing my experiences and perspectives through writing. <br/>On my free time, I attend meetups, listen to engineering podcasts, read tech blogs, and take online courses to help me become a better developer for the people around me.</p>
            </div>  
            <button className="back-home-button"><Link className="back-home-button" to='/'>
                Home
                </Link></button>
                <hr />
                <Footer /> 
        </div>
    )
}

export default About;