import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../components';

test('Teste se a página contém as informações sobre a Pokédex.', () => {
  renderWithRouter(<About />);
  const informationPokedex = screen.getByText(/This application simulates a Pokédex/i);
  expect(informationPokedex).toBeInTheDocument();
});

test('se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />);
  const title = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
  expect(title).toBeDefined();
  expect(title).toHaveTextContent('About Pokédex');
});

test('se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  renderWithRouter(<About />);
  const paragraphOne = screen.getByText(/This application simulates/i);
  expect(paragraphOne).toBeInTheDocument();
  const paragraphTwo = screen.getByText(/One can filter Pokémons by type/i);
  expect(paragraphTwo).toBeInTheDocument();
});

test('Teste se a página contém a imagem de uma Pokédex', () => {
  const srcImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  renderWithRouter(<About />);
  const img = screen.getByAltText(/Pokédex/i);
  expect(img).toHaveAttribute('src', srcImg);
});
