import { Link } from 'react-router-dom';

import '../css/pokemon-card.css';
import Badge from './badge-type';

export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='pokemon-card'>
      <div className='pokemon-card__picture'>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      </div>

      <div className='pokemon-card__content'>
        <div className='pokemon-card__title-wrapper'>
          <p className='pokemon-card__id'>
            N°{' '}
            {pokemon.id.toString().length === 4
              ? pokemon.id
              : '0'.repeat(3 - pokemon.id.toString().length) + pokemon.id}
          </p>
          <h2 className='pokemon-card__title capital'>{pokemon.name.replace(/-/g, ' ')}</h2>
        </div>
        <div className='pokemon-card__types-container'>
          {pokemon.types.map((type) => {
            return <Badge key={type.slot} typeName={type.type.name} />;
          })}
        </div>
      </div>
    </Link>
  );
}
