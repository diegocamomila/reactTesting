import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../components';
import App from '../App';

test('Teste se há um heading h2 com o texto "Page requested not found"', () => {
  renderWithRouter(<NotFound />);
  const notFound = screen.getByRole('heading', { level: 2 });
  expect(notFound).toHaveTextContent(/Page requested not found/i);
});

test('sTeste se página mostra a imagem correta', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pagina_nao_encontrada');
  const image = screen.getByRole('img', {
    name: /Pikachu crying because the page requested was not found/i,
  });
  expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
