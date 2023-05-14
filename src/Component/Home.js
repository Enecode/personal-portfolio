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
            <div className="project-container">
                    <h4 className="projects-heading">Project</h4>
                    <div className="myproject-holder  project-container-holder">
                        <div className="myproject project1">
                            <h4>Electronic Health Management System</h4>
                            <p>Electronic Health Management System is a web application that helps to manage patients' health records. It is built with React, Django Rest Framework, and Postgres SQL.</p>
                            <a href="https://github.com/Enecode/Ehealth-web-app" className="github-link">
                                <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                            </a>
                        </div>
                        <div className="myproject project2">
                            <h4>Electronic Wallet</h4>
                            <p>I collaborated with a team to design and implement an e-wallet app using Java, MySQL, and React.js for the front end. I implemented the front-end.</p>
                            <a href="https://github.com/Enecode/e-wallet-frontend" className="github-link">
                                <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                            </a>
                        </div>
                        <div className="myproject project3">
                            <h4>Web Blog</h4>
                            <p>I built a web blog using Django and Postgres SQL. It is a simple blog that allows users to create, read, update, and delete posts.</p>
                            <a href="https://github.com/Enecode/myblog" className="github-link">
                                <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                            </a>
                        </div>  
                        <div className="myproject project4">
                            <h4 >My Digital Profile</h4>
                            <p>I built my digital profile using React.js and CSS. It is a simple web application that showcases my skills and experiences.</p>
                            <a href="https://enecode.github.io/digital-profile" className="github-link">
                                <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                            </a>
                        </div>
                        <div className="myproject project5">
                            <h4>Meme Generator With Reactjs</h4>
                            <p>I built a meme generator using React.js. It is a simple web application that allows users to generate memes.</p>
                            <a href="https://github.com/Enecode/meme-generator-react" className="github-link">
                                <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                            </a>
                        </div>
                    </div>    
                </div>
                <hr />
                <Footer />
        </>
    )
}

export default Home