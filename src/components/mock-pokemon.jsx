export default {
  abilities: [
    {
      ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 64,
  cries: {
    latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
    legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg',
  },
  forms: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' }],
  game_indices: [
    { game_index: 153, version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' } },
    { game_index: 153, version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' } },
    { game_index: 153, version: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version/3/' } },
    { game_index: 1, version: { name: 'gold', url: 'https://pokeapi.co/api/v2/version/4/' } },
    { game_index: 1, version: { name: 'silver', url: 'https://pokeapi.co/api/v2/version/5/' } },
    { game_index: 1, version: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version/6/' } },
    { game_index: 1, version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' } },
    { game_index: 1, version: { name: 'sapphire', url: 'https://pokeapi.co/api/v2/version/8/' } },
    { game_index: 1, version: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version/9/' } },
    { game_index: 1, version: { name: 'firered', url: 'https://pokeapi.co/api/v2/version/10/' } },
    { game_index: 1, version: { name: 'leafgreen', url: 'https://pokeapi.co/api/v2/version/11/' } },
    { game_index: 1, version: { name: 'diamond', url: 'https://pokeapi.co/api/v2/version/12/' } },
    { game_index: 1, version: { name: 'pearl', url: 'https://pokeapi.co/api/v2/version/13/' } },
    { game_index: 1, version: { name: 'platinum', url: 'https://pokeapi.co/api/v2/version/14/' } },
    { game_index: 1, version: { name: 'heartgold', url: 'https://pokeapi.co/api/v2/version/15/' } },
    { game_index: 1, version: { name: 'soulsilver', url: 'https://pokeapi.co/api/v2/version/16/' } },
    { game_index: 1, version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' } },
    { game_index: 1, version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' } },
    { game_index: 1, version: { name: 'black-2', url: 'https://pokeapi.co/api/v2/version/21/' } },
    { game_index: 1, version: { name: 'white-2', url: 'https://pokeapi.co/api/v2/version/22/' } },
  ],
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [
    {
      move: { name: 'razor-wind', url: 'https://pokeapi.co/api/v2/move/13/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: { name: 'egg', url: 'https://pokeapi.co/api/v2/move-learn-method/2/' },
          version_group: { name: 'gold-silver', url: 'https://pokeapi.co/api/v2/version-group/3/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'egg', url: 'https://pokeapi.co/api/v2/move-learn-method/2/' },
          version_group: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version-group/4/' },
        },
      ],
    },
    {
      move: { name: 'swords-dance', url: 'https://pokeapi.co/api/v2/move/14/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'red-blue', url: 'https://pokeapi.co/api/v2/version-group/1/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version-group/2/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version-group/6/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'firered-leafgreen', url: 'https://pokeapi.co/api/v2/version-group/7/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'diamond-pearl', url: 'https://pokeapi.co/api/v2/version-group/8/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'platinum', url: 'https://pokeapi.co/api/v2/version-group/9/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'heartgold-soulsilver', url: 'https://pokeapi.co/api/v2/version-group/10/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'black-white', url: 'https://pokeapi.co/api/v2/version-group/11/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'black-2-white-2', url: 'https://pokeapi.co/api/v2/version-group/14/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'x-y', url: 'https://pokeapi.co/api/v2/version-group/15/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'omega-ruby-alpha-sapphire', url: 'https://pokeapi.co/api/v2/version-group/16/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'sun-moon', url: 'https://pokeapi.co/api/v2/version-group/17/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'ultra-sun-ultra-moon', url: 'https://pokeapi.co/api/v2/version-group/18/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'sword-shield', url: 'https://pokeapi.co/api/v2/version-group/20/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'scarlet-violet', url: 'https://pokeapi.co/api/v2/version-group/25/' },
        },
      ],
    },
    {
      move: { name: 'cut', url: 'https://pokeapi.co/api/v2/move/15/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'red-blue', url: 'https://pokeapi.co/api/v2/version-group/1/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version-group/2/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'gold-silver', url: 'https://pokeapi.co/api/v2/version-group/3/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version-group/4/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'ruby-sapphire', url: 'https://pokeapi.co/api/v2/version-group/5/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version-group/6/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'firered-leafgreen', url: 'https://pokeapi.co/api/v2/version-group/7/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'diamond-pearl', url: 'https://pokeapi.co/api/v2/version-group/8/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'platinum', url: 'https://pokeapi.co/api/v2/version-group/9/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'heartgold-soulsilver', url: 'https://pokeapi.co/api/v2/version-group/10/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'black-white', url: 'https://pokeapi.co/api/v2/version-group/11/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'colosseum', url: 'https://pokeapi.co/api/v2/version-group/12/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'xd', url: 'https://pokeapi.co/api/v2/version-group/13/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'black-2-white-2', url: 'https://pokeapi.co/api/v2/version-group/14/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'x-y', url: 'https://pokeapi.co/api/v2/version-group/15/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'omega-ruby-alpha-sapphire', url: 'https://pokeapi.co/api/v2/version-group/16/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: { name: 'bind', url: 'https://pokeapi.co/api/v2/move/20/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'black-2-white-2', url: 'https://pokeapi.co/api/v2/version-group/14/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'omega-ruby-alpha-sapphire', url: 'https://pokeapi.co/api/v2/version-group/16/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'ultra-sun-ultra-moon', url: 'https://pokeapi.co/api/v2/version-group/18/' },
        },
      ],
    },
    {
      move: { name: 'vine-whip', url: 'https://pokeapi.co/api/v2/move/22/' },
      version_group_details: [
        {
          level_learned_at: 13,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'red-blue', url: 'https://pokeapi.co/api/v2/version-group/1/' },
        },
        {
          level_learned_at: 13,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version-group/2/' },
        },
        {
          level_learned_at: 10,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'gold-silver', url: 'https://pokeapi.co/api/v2/version-group/3/' },
        },
        {
          level_learned_at: 10,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version-group/4/' },
        },
        {
          level_learned_at: 10,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'ruby-sapphire', url: 'https://pokeapi.co/api/v2/version-group/5/' },
        },
        {
          level_learned_at: 10,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version-group/6/' },
        },
        {
          level_learned_at: 10,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'firered-leafgreen', url: 'https://pokeapi.co/api/v2/version-group/7/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'diamond-pearl', url: 'https://pokeapi.co/api/v2/version-group/8/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'platinum', url: 'https://pokeapi.co/api/v2/version-group/9/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'heartgold-soulsilver', url: 'https://pokeapi.co/api/v2/version-group/10/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'black-white', url: 'https://pokeapi.co/api/v2/version-group/11/' },
        },
        {
          level_learned_at: 10,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'colosseum', url: 'https://pokeapi.co/api/v2/version-group/12/' },
        },
        {
          level_learned_at: 10,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'xd', url: 'https://pokeapi.co/api/v2/version-group/13/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'black-2-white-2', url: 'https://pokeapi.co/api/v2/version-group/14/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'x-y', url: 'https://pokeapi.co/api/v2/version-group/15/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'omega-ruby-alpha-sapphire', url: 'https://pokeapi.co/api/v2/version-group/16/' },
        },
        {
          level_learned_at: 7,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'sun-moon', url: 'https://pokeapi.co/api/v2/version-group/17/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'sun-moon', url: 'https://pokeapi.co/api/v2/version-group/17/' },
        },
        {
          level_learned_at: 9,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'ultra-sun-ultra-moon', url: 'https://pokeapi.co/api/v2/version-group/18/' },
        },
        {
          level_learned_at: 5,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'sword-shield', url: 'https://pokeapi.co/api/v2/version-group/20/' },
        },
        {
          level_learned_at: 3,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'scarlet-violet', url: 'https://pokeapi.co/api/v2/version-group/25/' },
        },
      ],
    },
    {
      move: { name: 'headbutt', url: 'https://pokeapi.co/api/v2/move/29/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'gold-silver', url: 'https://pokeapi.co/api/v2/version-group/3/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version-group/4/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'heartgold-soulsilver', url: 'https://pokeapi.co/api/v2/version-group/10/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: { name: 'tackle', url: 'https://pokeapi.co/api/v2/move/33/' },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'red-blue', url: 'https://pokeapi.co/api/v2/version-group/1/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version-group/2/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'gold-silver', url: 'https://pokeapi.co/api/v2/version-group/3/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version-group/4/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'ruby-sapphire', url: 'https://pokeapi.co/api/v2/version-group/5/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version-group/6/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'firered-leafgreen', url: 'https://pokeapi.co/api/v2/version-group/7/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'diamond-pearl', url: 'https://pokeapi.co/api/v2/version-group/8/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'platinum', url: 'https://pokeapi.co/api/v2/version-group/9/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'heartgold-soulsilver', url: 'https://pokeapi.co/api/v2/version-group/10/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'black-white', url: 'https://pokeapi.co/api/v2/version-group/11/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'colosseum', url: 'https://pokeapi.co/api/v2/version-group/12/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'xd', url: 'https://pokeapi.co/api/v2/version-group/13/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'black-2-white-2', url: 'https://pokeapi.co/api/v2/version-group/14/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'x-y', url: 'https://pokeapi.co/api/v2/version-group/15/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'omega-ruby-alpha-sapphire', url: 'https://pokeapi.co/api/v2/version-group/16/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'sun-moon', url: 'https://pokeapi.co/api/v2/version-group/17/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'ultra-sun-ultra-moon', url: 'https://pokeapi.co/api/v2/version-group/18/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'sword-shield', url: 'https://pokeapi.co/api/v2/version-group/20/' },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'scarlet-violet', url: 'https://pokeapi.co/api/v2/version-group/25/' },
        },
      ],
    },
    {
      move: { name: 'body-slam', url: 'https://pokeapi.co/api/v2/move/34/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'red-blue', url: 'https://pokeapi.co/api/v2/version-group/1/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version-group/2/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version-group/6/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'firered-leafgreen', url: 'https://pokeapi.co/api/v2/version-group/7/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
          version_group: { name: 'xd', url: 'https://pokeapi.co/api/v2/version-group/13/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'sword-shield', url: 'https://pokeapi.co/api/v2/version-group/20/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'scarlet-violet', url: 'https://pokeapi.co/api/v2/version-group/25/' },
        },
      ],
    },
    {
      move: { name: 'take-down', url: 'https://pokeapi.co/api/v2/move/36/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'red-blue', url: 'https://pokeapi.co/api/v2/version-group/1/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version-group/2/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'diamond-pearl', url: 'https://pokeapi.co/api/v2/version-group/8/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'platinum', url: 'https://pokeapi.co/api/v2/version-group/9/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'heartgold-soulsilver', url: 'https://pokeapi.co/api/v2/version-group/10/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'black-white', url: 'https://pokeapi.co/api/v2/version-group/11/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'black-2-white-2', url: 'https://pokeapi.co/api/v2/version-group/14/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'x-y', url: 'https://pokeapi.co/api/v2/version-group/15/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'omega-ruby-alpha-sapphire', url: 'https://pokeapi.co/api/v2/version-group/16/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'sun-moon', url: 'https://pokeapi.co/api/v2/version-group/17/' },
        },
        {
          level_learned_at: 15,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'ultra-sun-ultra-moon', url: 'https://pokeapi.co/api/v2/version-group/18/' },
        },
        {
          level_learned_at: 18,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'sword-shield', url: 'https://pokeapi.co/api/v2/version-group/20/' },
        },
        {
          level_learned_at: 21,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: { name: 'level-up', url: 'https://pokeapi.co/api/v2/move-learn-method/1/' },
          version_group: { name: 'scarlet-violet', url: 'https://pokeapi.co/api/v2/version-group/25/' },
        },
        {
          level_learned_at: 0,
          move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
          version_group: { name: 'scarlet-violet', url: 'https://pokeapi.co/api/v2/version-group/25/' },
        },
      ],
    },
  ],
  name: 'bulbasaur',
  order: 1,
  past_abilities: [],
  past_types: [],
  species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        front_female: null,
      },
      home: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
        front_female: null,
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png',
        front_shiny_female: null,
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
      },
      showdown: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif',
        back_shiny_female: null,
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif',
        front_shiny_female: null,
      },
    },
  },
  stats: [
    { base_stat: 80, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
    { base_stat: 49, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
    { base_stat: 49, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
    { base_stat: 65, effort: 1, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
    { base_stat: 65, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
    { base_stat: 45, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } },
  ],
  types: [
    { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
    { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } },
  ],
  weight: 69,
};
