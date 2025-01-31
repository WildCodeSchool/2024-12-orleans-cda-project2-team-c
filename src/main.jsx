import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import './main.css';
import Error404 from './pages/error-404';
import Home from './pages/home';
import Pokedex from './pages/pokedex';
import PokemonDisplay from './pages/pokemon-display';
import PokemonList from './pages/pokemon-list';
import Quiz from './pages/quiz';
import ApiConnection from './utils/api-connection';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
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
        loader: (route) => {
          return Promise.all([
            ApiConnection.getOnePokemon(route.params.id),
            ApiConnection.getOnePokemon(parseInt(route.params.id) === 1025 ? 1 : parseInt(route.params.id) + 1),
            ApiConnection.getOnePokemon(parseInt(route.params.id) === 1 ? 1025 : parseInt(route.params.id) - 1),
          ]);
        },
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
