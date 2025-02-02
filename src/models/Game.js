export default class Game {
  constructor(pokemons) {
    this.pokemons = pokemons;
    this.results = [];
    this.score = 0;
  }

  updateScore(points = 2) {
    this.score += points;
  }

  updateResults(index, isCorrect) {
    this.results.push({ index: isCorrect });
  }
}
