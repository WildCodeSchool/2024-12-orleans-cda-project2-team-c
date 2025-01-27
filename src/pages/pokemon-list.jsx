import { useEffect, useState } from 'react';

import Loader from '../components/loader';
import PokemonCard from '../components/pokemon-card';
import ApiConnection from '../utils/api-connection';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState(new Array());
  const [page, setPage] = useState(0);

  async function getPokemons() {
    Promise.all(await ApiConnection.getPokemonPage(page)).then((newPage) => {
      setPokemons(...newPage);
    });
  }

  useEffect(() => {
    getPokemons(page);
  }, [page]);

  return (
    <main>
      {pokemons.length ? (
        pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })
      ) : (
        <Loader />
      )}
    </main>
  );
}
