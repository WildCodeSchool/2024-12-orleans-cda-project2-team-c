import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import PrevBtn from '../assets/icons/chevron-left-blue.png';
import NextBtn from '../assets/icons/chevron-right-blue.png';
import '../css/carousel.css';
import Badge from './badge-type';
import Button from './button';
import Stats from './stats';

export default function Carousel() {
  const loaderData = useLoaderData();
  const [pokemons, setPokemons] = useState(loaderData);
  const [slideIndex, setSlideIndex] = useState(0);

  const link = '';
  const href = '';

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
            {pokemons.map((pokemon, index) => {
              return (
                <div className={`card-carousel ${index === slideIndex ? 'card-carousel--active' : ''}`} key={index}>
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
                      {pokemon.types.map((element) => {
                        return <Badge typeName={element.type.name} key={element.type.name} href={href} />;
                      })}
                    </div>
                    <Stats pokemon={pokemon} />
                  </div>
                </div>
              );
            })}
            <div className='dots-container'>
              {pokemons.map((pokemon, index) => (
                <div
                  key={pokemon.id}
                  className={`dot ${index === slideIndex ? 'dot--active' : ''}`}
                  onClick={() => setSlideIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <button onClick={prevSlide} className='prev-btn'>
          <img src={PrevBtn} alt='Previous' />
        </button>

        <button onClick={nextSlide} className='next-btn'>
          <img src={NextBtn} alt='Next' />
        </button>
      </div>

      <Button link={link} href={href} className={'button  button--red'}>
        Explore all !
      </Button>
    </>
  );
}
