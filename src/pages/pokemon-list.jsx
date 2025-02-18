import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Button from '../components/button';
import ButtonUp from '../components/button-up';
import Loader from '../components/loader';
import PokemonCard from '../components/pokemon-card';
import '../css/pokemon-list.css';
import ApiConnection from '../utils/api-connection';

export default function PokemonList() {
  const loaderData = useLoaderData();
  const [pokemons, setPokemons] = useState(loaderData);

  const [page, setPage] = useState(2);

  async function getPokemons(page) {
    const newPage = await ApiConnection.getPokemonPage(page);
    setPokemons([...pokemons, ...newPage]);
  }

  function handleClickMoreBtn() {
    setPage(page + 1);
    getPokemons(page);
  }

  return (
    <>
      <div className='top-container'>
        <h1>Pokélist</h1>
        <p className='pokelist-phrase'>Explore the ultimate PokéList with every Pokémon at your fingertips!</p>
      </div>
      <section className='pokemon-section'>
        <div className='pokemon-list'>
          {pokemons.length ? (
            pokemons.map((pokemon) => {
              return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
            })
          ) : (
            <Loader />
          )}
        </div>

        <Button onClick={handleClickMoreBtn} className='button--red center'>
          more
        </Button>
      </section>
      <ButtonUp />
    </>
  );
}
