import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Footer";
import "./Project.css";
import Nav from "../Nav.js";

function Project() {
    return (
            <div className="project-container">
                <Nav />
                <h4 className="projects-heading">Project</h4>
                <div className="myproject-holder project-container-holder">
                    <div className="myproject project1">
                        <h4 className="title">Electronic Health Management System</h4>
                        <p className="description">Electronic Health Management System is a web application that helps to manage patients' health records. It is built with React, Django Rest Framework, and Postgres SQL.</p>
                        <a href="https://github.com/Enecode/Ehealth-web-app" className="github-link">
                            <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                        </a>
                    </div>
                    <hr />

                    <div className="myproject project2">
                        <h4 className="title">Electronic Wallet</h4>
                        <p className="description">I collaborated with a team to design and implement an e-wallet app using Java, MySQL, and React.js for the front end. I implemented the front-end.</p>
                        <a href="https://github.com/Enecode/e-wallet-frontend" className="github-link">
                            <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                        </a>
                    </div>
                    <hr />

                    <div className="myproject project3">
                        <h4 className="title">Web Blog</h4>
                        <p className="description">I built a web blog using Django and Postgres SQL. It is a simple blog that allows users to create, read, update, and delete posts.</p>
                        <a href="https://github.com/Enecode/myblog" className="github-link">
                            <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                        </a>
                    </div> 
                    <hr /> 

                    <div className="myproject project4">
                        <h4 className="title">My Digital Profile</h4>
                        <p className="description">I built my digital profile using React.js and CSS. It is a simple web application that showcases my skills and experiences.</p>
                        <a href="https://enecode.github.io/digital-profile" className="github-link">
                            <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                        </a>
                    </div>
                    <hr />

                    <div className="myproject project5">
                        <h4 className="title">Meme Generator With Reactjs</h4>
                        <p className="description">I built a meme generator using React.js. It is a simple web application that allows users to generate memes.</p>
                        <a href="https://github.com/Enecode/meme-generator-react" className="github-link">
                            <FontAwesomeIcon className="github-Icon" icon={faGithub} size="3x" />
                        </a>
                    </div>
                    <hr />
                    <Footer /> 

                </div>
            </div>
    );
}

export default Project;
