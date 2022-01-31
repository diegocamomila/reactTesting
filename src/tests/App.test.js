import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se a aplicação contém um conjunto fixo de três links de navegação.', () => {
  renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /home/i });
  const linkAbout = screen.getByRole('link', { name: /about/i });
  const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });

  expect(linkHome).toHaveTextContent('Home');
  expect(linkAbout).toHaveTextContent('About');
  expect(linkFavorite).toHaveTextContent('Favorite Pokémons');
});

test('teste redirecionamento para a página inicial / , ao clicar no link Home',
  () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkHome);
    const { pathName } = history.location;
    expect(pathName).toBe('/');
  });

test('teste redirecionamento para a página  /abalt , ao clicar no link Abalt',
  () => {
    const { history } = renderWithRouter(<App />);
    const linkAbalt = screen.getByRole('link', { name: /abalt/i });
    userEvent.click(linkAbalt);
    const { pathName } = history.location;
    expect(pathName).toBe('/abalt');
  });

test('teste redirecionamento para página /favorites, no link Pokemons Favoritados',
  () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorites = screen.getByRole('link', { name: /favorites/i });
    userEvent.click(linkFavorites);
    const { pathName } = history.location;
    expect(pathName).toBe('/favorites');
  });
