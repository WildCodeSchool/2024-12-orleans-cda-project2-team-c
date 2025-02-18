import pokemonNames from '../utils/pokemon-names';
import Round from './Round';

export default class Game {
  constructor(pokemons) {
    this.rounds = pokemons.map((pokemon) => {
      this.setWrongValues(pokemon, pokemonNames);
      return new Round(pokemon);
    });
    this.results = [];
    this.score = 0;
  }

  updateScore(round) {
    this.score += 3 - round.penalty;
  }

  updateResults(index, isCorrect) {
    this.results.push({ index: isCorrect });
  }

  setWrongValues(pokemon, wrongValues) {
    pokemon.wrongValues = [];
    while (pokemon.wrongValues.length < 2) {
      const value = wrongValues[Math.floor(Math.random() * wrongValues.length)];
      if (value.toLOwerCase().replaceAll(/\W/g, '-').replaceAll(/--/g, '-') !== pokemon.name) {
        pokemon.wrongValues.push(value);
      }
    }
  }
}
