export const getQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  console.log(res);
  const [quote] = await res.json();

  return {
    quote: quote.quote,
    character: quote.character,
    image: quote.image,
  };
};
