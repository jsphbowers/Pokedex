import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js"

function _drawPokedex() {
  let pokedexList = appState.pokedex
  let template = ''
}

export class PokedexController {
  constructor() {
    // console.log('hello from pokedex');

  }

  async addPokedex(id) {
    try {
      console.log('we be adding', id);
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}