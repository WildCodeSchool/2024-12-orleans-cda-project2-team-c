export default class Round {
  constructor(pokemon) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.picture = pokemon.sprites.other['official-artwork'].front_default;
    this.types = [];
    this.penalty = 0;
    this.new = false;
    pokemon.types.forEach((type) => {
      this.types.push(type.type.name);
    });
    this.answers = [
      ...pokemon.wrongValues.map((value) => {
        return { value: value, isValid: false, id: crypto.randomUUID() };
      }),
      { value: pokemon.name, isValid: true, id: crypto.randomUUID() },
    ];
    this.shuffleAnswers();
    this.isValid = false;
  }

  shuffleAnswers() {
    for (let i = this.answers.length - 1; i >= 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const tmp = this.answers[i];
      this.answers[i] = this.answers[newIndex];
      this.answers[newIndex] = tmp;
    }
  }

  setPenalty() {
    this.penalty++;
  }

  checkAnswer(id) {
    this.isValid = this.answers.find((answer) => answer.id === id).isValid;
    return this.isValid;
  }
}
