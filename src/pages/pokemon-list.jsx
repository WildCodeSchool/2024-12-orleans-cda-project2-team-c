import { useEffect, useState } from 'react';

import Loader from '../components/loader';
import PokemonCard from '../components/pokemon-card';
import ApiConnection from '../utils/api-connection';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getPokemons() {
      const pokemonList = [];

      Promise.all(await ApiConnection.getPokemonPage(page)).then((newPage) => {
        pokemonList.push(...newPage);
        setPokemons(pokemonList);
      });
    }

    getPokemons(page);
  }, [page]);

  return (
    <section className='pokemon-section'>
      {pokemons.length ? (
        pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })
      ) : (
        <Loader />
      )}
    </section>
  );
}
