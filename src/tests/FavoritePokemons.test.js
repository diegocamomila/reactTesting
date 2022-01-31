import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemons } from '../components';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se exibe "No favorite pokemon found", se não tiver favoritos', () => {
  renderWithRouter(<FavoritePokemons />);
  const notFavorites = screen.getByText(/No favorite pokemon found/i);
  expect(notFavorites).toBeInTheDocument();
});

test('se é exibido todos os cards de pokémons favoritados', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/4');
  const favorite = screen.getByLabelText(/Pokémon favoritado?/i);
  userEvent.clear(favorite);
  renderWithRouter(<FavoritePokemons />);
  const charmander = screen.getByTestId('pokemon-name');
  expect(charmander).toBeDefined();
});
