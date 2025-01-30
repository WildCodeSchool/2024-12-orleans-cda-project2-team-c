import Badge from '../components/badge-type';
import Button from '../components/button';
import Mock from '../components/mock-pokemon';
import '../css/pokemon-display.css';

const weaknesses = {
  steel: ['fire', 'fighting', 'ground'],
  fighting: ['flying', 'psychic', 'fairy'],
  dragon: ['ice', 'dragon', 'fairy'],
  water: ['electric', 'Grass'],
  fire: ['water', 'ground', 'rock'],
  electric: ['ground'],
  fairy: ['poison', 'steel'],
  ice: ['fire', 'fighting', 'rock', 'steel'],
  bug: ['fire', 'flying', 'rock'],
  normal: ['fighting'],
  grass: ['fire', 'ice', 'poison', 'bug'],
  poison: ['ground', 'psychic'],
  psychic: ['bug', 'ghost', 'dark'],
  rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
  ground: ['water', 'grass', 'ice'],
  ghost: ['ghost', 'dark'],
  dark: ['fighting', 'bug', 'fairy'],
  flying: ['electric', 'ice', 'rock'],
};

export default function PokemonDisplay() {
  const pokemon = Mock;
  return (
    <section className='pokemon-display'>
      <Button link={true} href={'/pokelist'} className={'button button--red'}>
        {' '}
        {'<  Back to Pokélist'}{' '}
      </Button>

      <div className='pokemon-container'>
        <p>{'0'.repeat(3 - pokemon.id.toString().length) + pokemon.id}</p>
        <div className='left'>
          <div className='left-top box'>
            <h1>{pokemon.name}</h1>
            <p>0.7m - 6,9kg</p>
          </div>
          <div className='column1'>
            <div className='item'>
              <h3 className='item-title'>Base stats</h3>
              {pokemon.stats.map((stat) => {
                return (
                  <>
                    <p>
                      {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)} :
                      <strong>{stat.base_stat}</strong>
                    </p>
                  </>
                );
              })}
            </div>

            <div className='item'>
              <h3 className='item-title'>Moves</h3>
              <ul className='moves-list'>
                {pokemon.moves.slice(0, 8).map((move) => {
                  return (
                    <li key={move.move.name}>
                      {move.move.name.charAt(0).toUpperCase() + move.move.name.replace(/-/g, ' ').slice(1)}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='column2'>
            <div className='item'>
              <h3 className='item-title'>Abilities</h3>
              {pokemon.abilities.map((ability) => {
                return (
                  <>
                    <p>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</p>
                  </>
                );
              })}
            </div>

            <div className='item'>
              <h3 className='item-title'>Types</h3>
              <div>
                {pokemon.types.map((type) => {
                  return (
                    <>
                      <Badge typeName={type.type.name} />
                    </>
                  );
                })}
              </div>
            </div>

            <div className='item'>
              <h3 className='item-title'>Weaknesses</h3>
              <div>
                <Badge typeName='fire' />
                <Badge typeName='ice' />

                <Badge typeName='flying' />
                <Badge typeName='psychic' />
              </div>
            </div>
          </div>
        </div>
        <div className='right box'>
          <img src={Mock.sprites.other['official-artwork'].front_default} alt='' />
        </div>
      </div>
      <div className='pokelist-navigation'>
        <button className='arrow-button left-arrow arrow'>
          <h3>{pokemon.id - 1}</h3>
          <p>{'0'.repeat(3 - pokemon.id.toString().length) + (pokemon.id - 1)}</p>
        </button>

        <button className='arrow-button right-arrow arrow'>
          <p>{'0'.repeat(3 - pokemon.id.toString().length) + (pokemon.id + 1)}</p>
          <h3>{pokemon.id + 1}</h3>
        </button>
      </div>
    </section>
  );
}
