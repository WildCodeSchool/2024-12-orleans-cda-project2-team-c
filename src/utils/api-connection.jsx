export default {
  baseUrl: 'https://pokeapi.co/api/v2/',

  getOnePokemon: async function (id) {
    const resource = 'pokemon';

    try {
      const response = await fetch(`${this.baseUrl}${resource}/${id}`);

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`error while fetching ressource from API: ${response.code}`);
      }
    } catch (error) {
      console.error(error);
    }
  },

  getPokemonPage: async function (page = 1) {
    const resource = 'pokemon';
    const offset = page * 9 - 9;

    try {
      const response = await fetch(`${this.baseUrl}${resource}/?offset=${offset}&limit=9`);

      if (response.ok) {
        const data = await response.json();

        const pokemonsFetchesArray = [];
        data.results.forEach((pokemon) => {
          pokemonsFetchesArray.push(this.getRessourceByUrl(pokemon.url));
        });
        return Promise.all(pokemonsFetchesArray);
      } else {
        throw new Error(`error while fetching ressource from API: ${response.code}`);
      }
    } catch (error) {
      console.error(error);
    }
  },

  getRessourceByUrl: async function (url) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`error while fetching ressource from API: ${response.code}`);
      }
    } catch (error) {
      console.error(error);
    }
  },

  getQuizPokemons: async function () {
    const randomIdsArray = this.getRandomIdArray();

    try {
      const pokemonsFetchesArray = [];
      randomIdsArray.forEach((id) => {
        pokemonsFetchesArray.push(this.getRessourceByUrl(`${this.baseUrl}pokemon/${id}`));
      });
      return Promise.all(pokemonsFetchesArray);
    } catch (error) {
      console.error(error);
    }
  },

  getRandomIdArray: function () {
    const randomIds = [];

    while (randomIds.length < 10) {
      const randomId = Math.floor(Math.random() * 1026);
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }
    return randomIds;
  },
};
