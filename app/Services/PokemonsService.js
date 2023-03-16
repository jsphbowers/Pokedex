import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

// @ts-ignore
const pokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/',
  timeout: 5000
})

class PokemonsService {
  async getAllPokemon() {
    // console.log('getting them pokemon');
    const res = await pokemon.get('v2/pokemon?limit=50&offset=0')
    // console.log(res.data.results);
    appState.pokemons = res.data.results
    // console.log(appState.pokemons);

  }
  async getSinglePokemon(pokeId) {
    // console.log('this is from service', pokeId);
    const res = await pokemon.get(`${pokeId}`)
    // console.log(res.data);
    appState.activePokemon = new Pokemon(res.data)
    console.log(appState.activePokemon);
  }

}

export const pokemonsService = new PokemonsService()