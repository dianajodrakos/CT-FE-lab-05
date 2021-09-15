/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from '../../containers/quote/SimpsonsQuote';

const mockServer = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          quote: 'And this is the snack holder where I can put my beverage or, if you will, cupcake.',
          character: 'Homer Simpson',
          image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
        },
      ])
    );
  })
);

describe('SimpsonsQuote test', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('should click a button on the DOM and reload the page with a random Simpsons character quote', async () => {
    render(<SimpsonsQuote />);

    const submitButton = screen.getByRole(
      'button',
      { name: 'get-quote' }
    );

    fireEvent.click(submitButton);

    return waitFor(() => {
      screen.getByText('Homer Simpson: And this is the snack holder where I can put my beverage or, if you will, cupcake.');
    });
  });
});
