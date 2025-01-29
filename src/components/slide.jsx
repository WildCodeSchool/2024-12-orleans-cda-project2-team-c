import React, { useState } from 'react';

import PrevBtn from '../assets/icons/chevron-left-blue.png';
import NextBtn from '../assets/icons/chevron-right-blue.png';
import '../css/carousel.css';
import MockPokemons from '../mock-pokemons';
import Badge from './badge-type';
import Button from './button';
import Stats from './stats';

export default function Carousel() {
  const MockPokemon = MockPokemons[1];
  const [slideIndex, setSlideIndex] = useState(0);

  const link = '';
  const href = '';

  const types = MockPokemon.types;

  const showSlides = (n) => {
    if (n > 1) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(1);
    } else {
      setSlideIndex(n);
    }
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex) => (slideIndex > 0 ? slideIndex - 1 : 8));
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex) => (slideIndex < 8 ? slideIndex + 1 : 0));
  };

  return (
    <>
      <div className='carousel-container'>
        <div className='carousel-slides'>
          <div className='slide'>
            <h1>Most popular</h1>
            {MockPokemons.map((pokemon, index) => {
              return (
                <div className={`card-carousel ${index === slideIndex ? 'card-carousel--active' : ''}`}>
                  <img
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    alt={pokemon.name}
                    className='pokemonImg'
                  />
                  <div className='info'>
                    <p>
                      {pokemon.name} N°{pokemon.id}
                    </p>

                    <div className='type'>
                      {types.map((element) => {
                        return <Badge typeName={element.type.name} key={element.type.name} href={href} />;
                      })}
                    </div>
                    <Stats pokemon={pokemon} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={prevSlide} className='prev-btn'>
          <img src={PrevBtn} alt='Previous' />
        </button>

        <button onClick={nextSlide} className='next-btn'>
          <img src={NextBtn} alt='Next' />
        </button>
      </div>

      <Button link={link} href={href} className={'button  button--red'} children={'Explore all !'} />
    </>
  );
}
