import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './quotes/quote';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState({});

  const fetchQuote = async () => {
    try {
      const response = await axios.get('/quotes.json');
      const quotes = response.data;
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      setQuote({
        text: randomQuote.text,
        author: randomQuote.author,
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="container">
        <Quote quote={quote} />
      </div>
      <div className="button-container">
        <button className="button" onClick={() => fetchQuote()}>
          Get Another Quote
        </button>
      </div>
    </>
  );
};

export default App;
