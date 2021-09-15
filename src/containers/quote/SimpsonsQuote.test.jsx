/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

describe('Container test', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('should return a call to an API', async () => {
    const component = render(<SimpsonsQuote />);

    screen.getByText('Get a Quote');

    const submitButton = screen.getByRole(
      'button',
      { name: 'get-quote' }
    );

    fireEvent.click(submitButton);
    return waitFor(() => {
      expect(component).toMatchSnapshot();
      
    });
  });
});
