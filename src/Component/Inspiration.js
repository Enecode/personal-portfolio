import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Inspirations.css';
import { Link } from 'react-router-dom'
import Footer from './Footer';
function Inspiration() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  
  useEffect(() => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const handleNextClick = () => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  return (
    <div className='quote-container'>
      <h1 className='title'>Inspirational Quotes</h1>
      <p className='quote'>{quote}</p>
      <p className='author'><cite>{author}</cite></p>
      
      <button className='button' onClick={handleNextClick}>Next</button>
      
      <br/>
      <button className="back-home-buttons">
        <Link className="back-home-buttons" to='/'>
          Home  
        </Link>
      </button>
      <Footer />

    </div>
  );
}

export default Inspiration;
