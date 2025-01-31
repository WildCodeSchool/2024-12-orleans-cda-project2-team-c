import { useState } from 'react';
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
            <h1 className='title'>Most popular</h1>
            {pokemons.map((pokemon, index) => {
              return (
                <div className={`card-carousel ${index === slideIndex ? 'card-carousel--active' : ''}`} key={index}>
                  <img
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    alt={pokemon.name}
                    className='pokemonImg'
                  />
                  <div className='info'>
                    <div className='id'>
                      <h2 className='name'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                      <p className='number'>N° {'0'.repeat(3 - pokemon.id.toString().length) + pokemon.id}</p>
                    </div>
                    <div className='type'>
                      {pokemon.types.map((element) => {
                        return <Badge typeName={element.type.name} key={element.type.name} href={'#'} />;
                      })}
                    </div>
                    <Stats pokemon={pokemon} />
                  </div>
                </div>
              );
            })}

            <div className='dots-container'>
              <button onClick={prevSlide} className='prev-dot'>
                <img src={PrevBtn} alt='Previous' className='img-dot' />
              </button>
              <div className='box-dot'>
                {pokemons.map((pokemon, index) => (
                  <div
                    key={pokemon.id}
                    className={`dot ${index === slideIndex ? 'dot--active' : ''}`}
                    onClick={() => setSlideIndex(index)}
                  ></div>
                ))}
              </div>
              <button onClick={nextSlide} className='next-dot'>
                <img src={NextBtn} alt='Next' className='img-dot' />
              </button>
            </div>
          </div>
        </div>

        <button onClick={prevSlide} className='prev-btn'>
          <img src={PrevBtn} alt='Previous' className='img-btn' />
        </button>

        <button onClick={nextSlide} className='next-btn'>
          <img src={NextBtn} alt='Next' className='img-btn' />
        </button>
        <button onClick={prevSlide} className='mid-l-btn'>
          <img src={PrevBtn} alt='Previous' className='img-btn' />
        </button>

        <button onClick={nextSlide} className='mid-r-btn'>
          <img src={NextBtn} alt='Next' className='img-btn' />
        </button>
      </div>

      <Button link={true} href={'#'} className={'button  button--red'}>
        Explore all !
      </Button>
    </>
  );
}
