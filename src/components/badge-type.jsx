import '../css/badge-type.css';

const types = {
  steel: ['#9EB7B8', 'black'],
  fighting: ['#D56723', 'white'],
  dragon: ['#53A4CF', '#F16E57', 'white'],
  water: ['#4592C4', 'white'],
  fire: ['#FD7D24', 'white'],
  electric: ['#EED535', 'black'],
  fairy: ['#FDB9E9', 'black'],
  ice: ['#51C4E7', 'black'],
  bug: ['#729F3F', 'white'],
  normal: ['#A4ACAF', 'black'],
  grass: ['#9BCC50', 'black'],
  poison: ['#B97FC9', 'white'],
  psychic: ['#F366B9', 'white'],
  rock: ['#A38C21', 'white'],
  ground: ['#F7DE3F', '#AB9842', 'black'],
  ghost: ['#7B62A3', 'white'],
  dark: ['#707070', 'white'],
  flying: ['#3DC7EF', '#BDB9B8', 'black'],
};

export default function Badge({ typeName, href }) {
  const type = types[typeName];

  const style = type
    ? {
        background: type.length === 2 ? type[0] : `linear-gradient(to bottom, ${type[0]} 50%, ${type[1]} 50%)`,
        color: type[type.length - 1],
      }
    : { background: 'var(--grey-dark)', color: 'white' };

  return (
    <a href={href} className='badge' style={style}>
      {type ? typeName.charAt(0).toUpperCase() + typeName.slice(1) : 'Unknown'}
    </a>
  );
}
