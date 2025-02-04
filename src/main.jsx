import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import './main.css';
import Error404 from './pages/error-404';
import Home from './pages/home';
import Pokedex from './pages/pokedex.jsx';
import PokemonDisplay from './pages/pokemon-display';
import PokemonList from './pages/pokemon-list';
import Quiz from './pages/quiz';
import ApiConnection from './utils/api-connection';

async function getPokemons() {
  return await ApiConnection.getPokemonPage();
}
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => {
          return getPokemons();
        },
      },
      {
        path: 'pokelist',
        element: <PokemonList />,
        loader: () => {
          return ApiConnection.getPokemonPage();
        },
      },
      {
        path: 'pokelist/:type',
        element: <PokemonList />,
      },
      {
        path: 'pokedex',
        element: <Pokedex />,
      },
      {
        path: 'pokemon/:id',
        element: <PokemonDisplay />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
