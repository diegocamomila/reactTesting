import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';

test('teste se página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const title = screen.getByRole('heading', { level: 2 });
  expect(title).toBeDefined(/Encountered pokémons/i);
});

// test('teste se o próximo Pokémon é exibo quando o botão Próximo pokémon é clicado',
//   () => {
//     const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
//     userEvent.click(nextButton);
//     let nextPokemon = screen.getByTestId(idName);
//     expect(nextPokemon).toHaveTextContent('Charmander');
//     userEvent.click(nextButton);
//     nextPokemon = screen.getByTestId(idName);
//     expect(nextPokemon).toHaveTextContent('Caterpie');
//   });

test('teste se é mostrado apenas um Pokémon por vez', () => {
  const Pokemons = screen.getAllByTestId(testIdName);
  expect(Pokemons.length).toBe(1);
});

test('Se a Pokédex tem os botões de filtro', () => {
  const allButton = screen.getAllByTestId('pokemon-type-button');
  expect(allButton.length).toBe(totalPokemonType);
  expect(allButton[0]).toHaveTextContent('Electric');
  expect(allButton[1]).toHaveTextContent('Fire');
  expect(allButton[2]).toHaveTextContent('Bug');
  expect(allButton[3]).toHaveTextContent('Poison');
  expect(allButton[4]).toHaveTextContent('Psychic');
  expect(allButton[5]).toHaveTextContent('Normal');
  expect(allButton[6]).toHaveTextContent('Dragon');
});

test('Se a Pokédex contém um botão para resetar o filtro', () => {
  const resetButton = screen.getByRole('button', { name: /all/i });
  expect(resetButton).toBeDefined();
});
