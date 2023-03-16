import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js";

function _drawPokemons() {
  let pokemonsList = appState.pokemons
  let template = ''
  pokemonsList.forEach(p => template += Pokemon.listTemplate(p))
  setHTML('pokemon-list', template)
  // console.log();
}

function _drawActive() {
  let activePokemon = appState.activePokemon
  setHTML('active-pokemon', activePokemon?.activeTemplate)
}

export class PokemonsController {
  constructor() {
    // console.log("gotta catch em all!");
    this.getPokemons()
    appState.on('pokemons', _drawPokemons)
    appState.on('activePokemon', _drawActive)
  }

  async getPokemons() {
    try {
      await pokemonsService.getAllPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async activePokemon(pokeId) {
    try {
      await pokemonsService.getSinglePokemon(pokeId)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}