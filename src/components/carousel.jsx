import { useEffect, useState } from 'react';

import PrevBtn from '../assets/icons/chevron-left-blue.png';
import NextBtn from '../assets/icons/chevron-right-blue.png';
import '../css/carousel.css';
import MockPokemon from '../mock-pokemon';
import ApiConnection from '../utils/api-connection';
import Badge from './badge-type';
import Button from './button';
import Stats from './stats';

// function PokemonList() {
//   return (
//     <main>
//       {pokemons.length ? (
//         pokemons.map((pokemon) => {
//           return <Carousel key={pokemon.name} pokemon={pokemon} />;
//         })
//       ) : (
//         <Loader />
//       )}
//     </main>
//   );
// }

export default function Carousel() {
  const link = '';
  const href = '';
  const types = [MockPokemon.types[0], MockPokemon.types[1]];

  // const [pokemons, setPokemons] = useState(new Array());
  // const [data, setData] = useState(1);

  // useEffect(() => {
  //   async function getPokemons() {
  //     const pokemonList = [];

  //     Promise.all(await ApiConnection.getPokemonPage(data)).then((newData) => {
  //       pokemonList.push(...newData);
  //       setPokemons(pokemonList);
  //     });
  //   }

  //   getPokemons(data);
  // }, [data]);

  return (
    <>
      <div className='slide'>
        <h1>Most popular</h1>

        <div className='card-carousel'>
          <img src={MockPokemon.sprites.other['official-artwork'].front_default} alt='' className='pokemonImg' />
          <div className='info'>
            <p>
              {MockPokemon.name} N°{MockPokemon.id}
            </p>

            <div className={'type'}>
              {types.map((element) => {
                return <Badge typeName={element.type.name} key={MockPokemon.name} />;
              })}
            </div>
            <Stats pokemon={MockPokemon} key={MockPokemon.name} />
          </div>
        </div>
        <div></div>

        <img src={PrevBtn} alt='' className='prev-btn' onClick={PrevSlide(-1)} />
        <img src={NextBtn} alt='' className='next-btn' onClick={NextSlide(1)} />
      </div>

      <Button link={link} href={href} className={'button  button--red'} children={'Explore all !'} />
    </>
  );
}
