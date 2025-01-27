import { useEffect, useState } from 'react';

import Loader from '../components/loader';
import PokemonCard from '../components/pokemon-card';
import ApiConnection from '../utils/api-connection';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  const getPokemons = () => {
    ApiConnection.getPokemonPage(page).then((data) => {
      console.log(data);
    });
    // setPokemons([...pokemons, ...pokemonList]);
  };

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
