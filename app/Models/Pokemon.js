


export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.sprites.front_shiny
    this.weight = data.weight
    this.height = data.height
  }
  static listTemplate(p) {
    return `
    <div class="card bg-secondary text-center selectable" onclick="app.pokemonsController.activePokemon('${p.url}')">
      <h5><span class="grass"><i class="mdi mdi-grass"></i></span> ${p.name} <span class="grass"><i class="mdi mdi-grass"></i></span></h5>
    </div>
    `
  }

  get pokedexList() {
    return `
          <div class="card bg-secondary selectable">
            <h5>${this.name}<span class="grass"><i class="mdi mdi-book"></i></span></h5>
          </div>
  `
  }

  get activeTemplate() {
    return `
    <section class="row p-4 sticky-top">
            <div class="card bg-danger">
              <div class="card bg-info text-center p-2 fw-bold mt-2">
                <h2>${this.name}</h2>
              </div>
              <div class="text-center">
                <img class="pokemon"
                  src="${this.img}" alt="pokemon">
              </div>
              <div class="card bg-info mb-2 p-2">
                <div class="d-flex justify-content-between">
                  <h5>Weight: ${this.weight}</h5>
                  <h5>Height: ${this.height}</h5>
                  <button class="btn bg-danger" onclick="app.pokedexController.addPokedex('${this.id}')">
                    Add to Pokedex
                  </button>
                </div>
              </div>
            </div>
          </section>
    `
  }
}