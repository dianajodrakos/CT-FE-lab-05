/* eslint-disable max-len */
import React, { useState } from 'react';
import Quote from '../../components/quote/Quote';
import Load from '../../components/quote/Load';
import { getQuote } from '../../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    const newQuote = await getQuote();
    setQuote(newQuote);
    setLoading(false);
  };

  return (
    <>
      <Load onClick={handleClick} />
      { loading ? (<h2>Loading...</h2>) 
        : (
          quote && (
            <Quote quote={quote.quote} character={quote.character} image={quote.image} />
          )
        )
      }
    </>
  );
};

export default SimpsonsQuote;
