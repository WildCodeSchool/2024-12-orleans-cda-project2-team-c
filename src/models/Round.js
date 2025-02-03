export default class Round {
  constructor(pokemon) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.picture = pokemon.sprites.other['official-artwork'].front_default;
    this.types = [];
    pokemon.types.forEach((type) => {
      this.types.push(type.type.name);
    });
    this.answers = [
      ...pokemon.wrongValues.map((value) => {
        return { answer: value, isValid: false };
      }),
      { value: pokemon.name, isValid: true },
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
}
