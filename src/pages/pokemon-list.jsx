import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Button from '../components/button';
import Loader from '../components/loader';
import PokemonCard from '../components/pokemon-card';
import SearchSection from '../components/search-section';
import '../css/pokemon-list.css';
import ApiConnection from '../utils/api-connection';

export default function PokemonList() {
  const loaderData = useLoaderData();
  const [pokemons, setPokemons] = useState(loaderData);

  const [page, setPage] = useState(1);

  async function getPokemons() {
    const newPage = await ApiConnection.getPokemonPage(page);
    setPokemons([...pokemons, ...newPage]);
  }

  function handleClickMoreBtn() {
    setPage(page + 1);
    getPokemons();
  }

  return (
    <section className='pokemon-section'>
      <SearchSection title='Pokélist' />

      <ul className='pokemon-list'>
        {pokemons.length ? (
          pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })
        ) : (
          <Loader />
        )}
      </ul>

      <Button onClick={handleClickMoreBtn} className='button--red center'>
        more
      </Button>
    </section>
  );
}
