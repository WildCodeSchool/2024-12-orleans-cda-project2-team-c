import pokemonNames from '../utils/pokemon-names';
import Round from './Round';

export default class Game {
  constructor(pokemons) {
    // this.pokemons = pokemons;
    this.results = [];
    this.score = 0;
    this.rounds = pokemons.map((pokemon) => {
      this.setWrongValues(pokemon, pokemonNames);
      return new Round(pokemon);
    });
  }

  updateScore(points = 2) {
    this.score += points;
  }

  updateResults(index, isCorrect) {
    this.results.push({ index: isCorrect });
  }

  setWrongValues(pokemon, wrongValues) {
    pokemon.wrongValues = [];
    while (pokemon.wrongValues.length < 2) {
      const value = wrongValues[Math.floor(Math.random() * wrongValues.length)];
      if (value !== pokemon.name) {
        pokemon.wrongValues.push(value);
      }
    }
  }
}
