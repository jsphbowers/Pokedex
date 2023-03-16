import { PokedexController } from "./Controllers/PokedexsController.js";
import { PokemonsController } from "./Controllers/PokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokemonsController = new PokemonsController()

  pokedexController = new PokedexController()
}

window["app"] = new App();
