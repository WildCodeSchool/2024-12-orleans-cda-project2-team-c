import '../css/pokemon-card.css';
import Badge from './badge-type';

export default function PokemonCard({ pokemon }) {
  return (
    <article className='pokemon-card'>
      <div className='pokemon-card__picture'>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      </div>

      <div className='pokemon-card__content'>
        <div className='pokemon-card__title-wrapper'>
          <p className='pokemon-card__id'>N° {'0'.repeat(3 - pokemon.id.toString().length) + pokemon.id}</p>
          <h2 className='pokemon-card__title'>{pokemon.name}</h2>
        </div>
        <div className='pokemon-card__types-container'>
          {pokemon.types.map((type) => {
            return <Badge key={type.slot} typeName={type.type.name} href={'#'} />;
          })}
        </div>
      </div>
    </article>
  );
}
