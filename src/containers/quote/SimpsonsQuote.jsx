/* eslint-disable max-len */
import React, { useState } from 'react';
import Quote from '../../components/quote/Quote';
import Load from '../../components/quote/Load';

const SimpsonsQuote = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});


  const handleClick = async () => {
    setLoading(true);
    getQuote()
      .then((quote) => setQuote(quote))
      .finally(() => setLoading(false));
  };

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <Load onClick={handleClick} />
      <Quote quote={quote.quote} character={quote.character} image={quote.image} /> 
    </>
  );
};

export default SimpsonsQuote;
