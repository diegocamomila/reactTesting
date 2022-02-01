import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('teste se página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const titlePokemon = screen.getByRole('heading', {
    name: /Encountered pokémons/i,
    level: 2,
  });

  expect(titlePokemon).toBeInTheDocument();
});

test('Teste se é exibido o próximo Pokémon quando o botão Próximo pokémon é clicado',
  () => {
    renderWithRouter(<App />);
    const nextButton = screen.getByTestId(/next-pokemon/i);
    expect(nextButton).toBeInTheDocument();

    const pokemons = [
      'Pikachu',
      'Charmander',
      'Cartepie',
      'Ekans',
      'Alakazam',
      'Mew',
      'Rapidash',
      'Snorlax',
      'Dragonair',
    ];

    pokemons.forEach((pokemon) => {
      const pokemonName = screen.getByTestId('pokemon-name', { name: pokemon });
      expect(pokemonName).toBeInTheDocument();
      userEvent.click(nextButton);
    });

    const nextPokemonName = screen.getByTestId('pokemon-name', { name: /pikachu/i });
    expect(nextPokemonName).toBeInTheDocument();
  });

test('Teste se é mostrado apenas um Pokémon por vez',
  () => {
    renderWithRouter(<App />);
    const Pokemon = screen.getByRole('link', { name: /More details/i });
    expect(Pokemon).toBeInTheDocument();
    // se tiver mais de um pokemon ira dar um erro no testById
  });

test('Testa se a Pokédex tem os botões de filtro.', () => {
  renderWithRouter(<App />);

  const allButton = [
    'Eletric',
    'Fire',
    'Bug',
    'Poison',
    'Psychic',
    'Normal',
    'Dragon',
  ];
  const buttonAll = screen.getByRole('button', { name: 'All' });

  allButton.forEach((type, index) => {
    const buttonType = screen.getAllByTestId('pokemon-type-button', { name: type });
    userEvent.click(buttonType[index]);

    const pokemonType = screen.getByTestId('pokemon-type', { name: type });

    expect(buttonType[index]).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(buttonAll).toBeInTheDocument();
  });
});

test('Testa se a Pokédex contém um botão para resetar o filtro', () => {
  renderWithRouter(<App />);
  const buttonAll = screen.getByRole('button', { name: 'All' });
  let pokemonName = screen.getByTestId('pokemon-name', { name: 'pikachu' });
  expect(pokemonName).toBeInTheDocument();
  expect(buttonAll).toBeInTheDocument();

  const buttonBug = screen.getByRole('button', { name: 'Bug' });
  userEvent.click(buttonBug);
  userEvent.click(buttonAll);
  pokemonName = screen.getByTestId('pokemon-name', { name: 'pikachu' });
  expect(pokemonName).toBeInTheDocument();
});
