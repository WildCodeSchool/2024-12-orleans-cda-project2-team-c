import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

import App from './App';
import './main.css';
import Error404 from './pages/error-404';
import Home from './pages/home';
import Pokedex from './pages/pokedex';
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
        path: 'pokedex',
        element: <Pokedex />,
        loader: () => {
          const stockPokemon = localStorage.getItem('result');
          if (stockPokemon) {
            const myPokemons = JSON.parse(stockPokemon).sort((a, b) => a - b);
            return Promise.all(myPokemons.map((myPokemon) => ApiConnection.getOnePokemonById(myPokemon)));
          }
        },
      },
      {
        path: 'pokemon/:param',
        element: <PokemonDisplay />,
        loader: async (route) => {
          const param = route.params.param;
          const response = await ApiConnection.getPokemon(param);
          if (response) {
            return response;
          } else {
            return redirect('/404');
          }
        },
      },
      {
        path: 'quiz',
        element: <Quiz />,
        loader: () => {
          return ApiConnection.getQuizPokemons();
        },
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
