import { useLoaderData } from 'react-router-dom';

import Button from '../components/button';
import ButtonUp from '../components/button-up';
import PokemonCard from '../components/pokemon-card';
import SearchSection from '../components/search-section';
import '../css/pokemon-list.css';

export default function Pokedex() {
  let myPokemons = useLoaderData();
  if (!myPokemons) {
    myPokemons = [];
  }

  return (
    <>
      <section className='pokemon-section'>
        <SearchSection title='Pokédex' />
        {myPokemons.length > 0 ? (
          <ul className='pokemon-list'>
            {myPokemons.map((pokemon) => {
              return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            })}
          </ul>
        ) : (
          <div className='oups'>
            <p>
              Oups... seems like you don’t have any Pokémon in your Pokédex yet...
              <br />
              Go and try to find some in the quiz !
            </p>
            <Button className='button--red center' link href='/quiz'>
              Play
            </Button>
          </div>
        )}

        {myPokemons && myPokemons.length > 0 ? (
          <Button className='button--red button--center' link href='/quiz'>
            Play
          </Button>
        ) : (
          ''
        )}
      </section>
      <ButtonUp />
    </>
  );
}
