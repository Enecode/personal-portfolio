import React from "react";
import Nav from "./Nav";
import "./Home.css"
import myImage from "../image/myimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";



function Home(){
    return(
        <>
            <Nav />
            <div className="home-container">
                <div className="about-container">
                    <div className="about-header-container">
                        <div>
                            <img className="myphoto" src={myImage} alt="Isah Jacob" />  
                        </div>
                        <h3 className="header-title">
                            <strong >Jacob</strong>
                        </h3>
                
                        <div className="about-container-holder">
                            <strong className="about-me">FullStack Engineer</strong>            
                        </div>
                        <p className="about-paragraph">I am helping others as I advance in my career by sharing my experiences and perspectives through writing. On my free time, I attend meetups, listen to engineering podcasts, read tech blogs, and take online courses to help me become a better developer for the people around me.</p>
                        <div className="social-button">
                            <a href="https://www.linkedin.com/in/isahejacob">
                                <FontAwesomeIcon icon={faLinkedin} className="linkedin-Icon" size="2x" />
                            </a>
                            <a href="https://github.com/enecode" className="github-Icon">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.twitter.com/isahjakub" className="twitter-Icon">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </>
    )
}

export default Home