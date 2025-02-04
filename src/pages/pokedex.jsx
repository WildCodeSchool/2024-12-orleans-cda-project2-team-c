import { useEffect, useState } from 'react';

import Button from '../components/button';
import PokemonCard from '../components/pokemon-card';
import SearchSection from '../components/search-section';
import '../css/pokemon-list.css';
import Mocks from '../mock-pokemons';

const Mock = Mocks;
localStorage.setItem('result', JSON.stringify(Mock));

export default function Pokedex() {
  const [pokemonResult, setPokemon] = useState(0);
  useEffect(() => {
    const storedPokemon = localStorage.getItem('result');
    if (storedPokemon) {
      const pokemons = JSON.parse(storedPokemon);
      setPokemon(pokemons);
    }
  }, []);

  return (
    <section className='pokemon-section'>
      <SearchSection title='Pokélist' />
      {pokemonResult.length > 0 ? (
        <ul className='pokemon-list'>
          {pokemonResult.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })}
        </ul>
      ) : (
        <p>Pas de Pokémon trouvé dans le localStorage.</p>
      )}
      <Button className='button--red center'>more</Button>
    </section>
  );
}
