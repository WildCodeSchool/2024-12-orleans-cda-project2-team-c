export default {
  baseUrl: 'https://pokeapi.co/api/v2/',

  getOnePokemon: async function (id) {
    const ressource = 'pokemon';

    try {
      const response = await fetch(`${this.baseUrl}${ressource}/${id}`);

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

  getPokemonPage: async function (page = 0) {
    const ressource = 'pokemon';
    const offset = page > 0 ? page * 9 - 9 : 0;

    try {
      const response = await fetch(`${this.baseUrl}${ressource}/?offset=${offset}&limit=9`);

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
