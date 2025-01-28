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
      console.log(error);
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
        return pokemonsFetchesArray;
      } else {
        throw new Error(`error while fetching ressource from API: ${response.code}`);
      }
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  },
};
