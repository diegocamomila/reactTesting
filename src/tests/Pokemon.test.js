import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
  renderWithRouter(<App />);
  const pokemonName = screen.getByTestId('pokemon-name');
  expect(pokemonName).toBeInTheDocument();

  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType).toHaveTextContent(/electric/i);

  const pokemonWeight = screen.getByTestId('pokemon-weight');
  expect(pokemonWeight).toHaveTextContent(/average weight/i);
  expect(pokemonWeight).toHaveTextContent(/kg/i);

  const imgSrc = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
  const pokemonImage = screen.getByRole('img', { name: 'Pikachu sprite' });
  expect(pokemonImage).toHaveAttribute('src', imgSrc);
});

test('Teste se card do Pokémon indicado contem um link de navegação', () => {
  renderWithRouter(<App />);
  const Link = screen.getByRole('link', { name: /More details/i });
  expect(Link).toHaveAttribute('href', '/pokemons/25');
});
// href', '/pokemons/25 é o resultado quando clica no link visto pelo inspecionar

test('Teste se o link de navegação Pokemon, redireciona para a pg de detalhes', () => {
  renderWithRouter(<App />);
  userEvent.click(screen.getByRole('link', { name: /more details/i }));
  const detailsPage = screen.getByText(/game locations/i);
  expect(detailsPage).toBeInTheDocument();
});

test('Teste a URL exibida no navegador', () => {
  const { history } = renderWithRouter(<App />);
  userEvent.click(screen.getByRole('link', { name: /more details/i }));
  const { location: { pathname } } = history;
  expect(pathname).toBe('/pokemons/25');
  userEvent.click(screen.getByLabelText(/Pokémon favoritado/i));
  const favoritIcon = screen.getByAltText(/pikachu is marked as favorite/i);
  expect(favoritIcon).toHaveAttribute('src', '/star-icon.svg');
});
