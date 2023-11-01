import React from "react";
import Nav from "../../Component/Nav/Nav.js";
import "./Home.css"
import myImage from "../../Component/image/myimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../Component/Footer/Footer.js";



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
                        <p className="about-paragraph">I am an innovative software engineer committed to pushing the limits of technology to provide brilliant results for businesses of all sizes. Beyond my work, I'm similarly committed to helping other professionals and tech enthusiasts along their paths by sharing my expertise through technical writing, lesson development, and interesting YouTube material.</p>
                        
                        <div className="social-button">
                            <a href="https://www.linkedin.com/in/isahjacob" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="linkedin-Icon" target="_blank" size="2x" />
                            </a>
                            <a href="https://github.com/enecode" className="github-Icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.twitter.com/_jayky" className="twitter-Icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCvJ4J6Wb0mr0LEhhTmYoURQ" className="youtube-Icon" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
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