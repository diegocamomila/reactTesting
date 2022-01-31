import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const NUMBER_LINKS = 3;

test('Teste se a aplicação contém um conjunto fixo de três links de navegação.', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByRole('link', { name: /home/i });
  const linkAbout = screen.getByRole('link', { name: /about/i });
  const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
  expect(linkHome).toHaveTextContent('Home');
  expect(linkAbout).toHaveTextContent('About');
  expect(linkFavorite).toHaveTextContent('Favorite Pokémons');
});
