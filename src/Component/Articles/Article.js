import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import './Article.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Article = () => {
    return (
        <div className="article-container">
            <Nav />
            <h4 className="article-heading">Articles</h4>
            <div className="myarticle-holder project-container-holder">
            
                <div className="myarticle articles">
                    <h4 className="title">How My Views on Software Engineering Have Changed Over Time.</h4>
                    <p className="article-description">When I started coding in December 2020, all I was made to believe was that what I needed to be a front-end engineer was the knowledge of JavaScript, HTML, and CSS. I thought this is what the tech space needs me to be good at to become a front-end developer. As someone who wanted to become a full stack, I accepted this wholeheartedly, but no, the industry is way more than that.</p>
                    <button className="read-more">
                        <a href="https://dev.to/jacobe/how-my-views-on-software-engineering-have-changed-over-time-47nb" className="readmore-link">Read More</a>
                    </button>
                </div>
                <hr />

                <div className="myarticle articles">
                    <h4 className="title">Functions in Python</h4>
                    <p className="article-description">When creating a program, there will be thousands of lines of code that cannot be stored in a single file. It is always a good idea to break it down into smaller, more maintainable, and reusable pieces of code. This is where functions come in. In this article, I will look at the following Python functions, arguments, and key word arguments.</p>
                    <button className="read-more">
                        <a href="https://dev.to/jacobe/functions-in-python-2nhc" className="readmore-link">Read More</a>
                    </button>
                </div>
                <hr />

                <div className="myarticle articles">
                    <h4 className="title">How To Use List Comprehension in Python</h4>
                    <p className="article-description">List comprehension allows you to create a list with a single line of code. List are collections of data separated by commas and covered by square brackets. A list comprehension is surrounded by square brackets as well, but instead of data, expressions are entered, followed by for-loops and if clauses.</p>
                    <button className="read-more">
                        <a href="https://dev.to/jacobe/how-to-use-list-comprehension-in-python-3ece" className="readmore-link">Read More</a>
                    </button>
                </div>
                <hr />

                <div className="myarticle articles">
                    <h4 className="title">ArrayList vs Array In Java</h4>
                    <p className="article-description">An array is a container object that holds a fixed number of single-type values. The length of an array is determined when it is created. Its length is fixed after it is created. It cannot be changed.</p>
                    <button className="read-more">
                        <a href="https://dev.to/jacobe/arraylist-vs-array-in-java-4cej" className="readmore-link">Read More</a>
                    </button>
                </div> 
                <hr /> 

                <div className="myarticle articles">
                    <h4 className="title">Exploring the Basics of Objects and Methods in Java</h4>
                    <p className="article-description">
                        Java is an object-oriented programming (OOP) language. What this means is that every class in Java is supposed to be a blueprint for an object with the same name. Think of an object as an instance of a class, which is a blueprint for creating objects.</p>
                    <button className="read-more">
                        <a href="https://dev.to/jacobe/exploring-the-basics-of-objects-and-methods-in-java-3dec" className="readmore-link">Read More</a>
                    </button>
                </div>
                <hr />

                <div className="myarticle articles">
                    <h4 className="title">A Beginner’s Approach to Java</h4>
                    <p className="article-description">When it comes to Java, people have different ideas and opinions about the language itself. I believe this is based on individual experience. In this article I will be introducing you to the world of Java and explaining a few questions that newbies who are learning Java ask.</p>
                    
                    <button className="read-more">
                        <a href="https://dev.to/jacobe/a-beginners-approach-to-java-26k3" className="readmore-link">Read More</a>
                    </button>
                </div>

                <div className="myarticle articles">
                    <h4 className="title">Why Is a List the Best Python Data Structure?</h4>
                    <p className="article-description">In Python, the most flexible data structure is the list. Python's data structures include four types: lists, tuples, sets, and dictionaries. Depending on what you're building, you can use these Python data structures to solve specific tasks. This built-in data structure comes in handy when creating real-world applications.</p>
                    
                    <button className="read-more">
                        <a href="https://dev.to/jacobe/why-is-a-list-the-best-python-data-structure-2lo4" className="readmore-link">Read More</a>
                    </button>
                </div>

                <hr />
                <Footer /> 
            </div>
        </div>
    );
};

export default Article;
