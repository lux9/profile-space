import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: [
        `<button class="btn btn-outline-success btn-block">> <i class="fa-solid fa-shield-dog"></i> dog.dad</button>`,
        `<button class="btn btn-outline-danger btn-block">> <i class="fa-solid fa-person-chalkboard"></i> bootcamp.teacher</button>`,
        `<button class="btn btn-outline-primary btn-block">> <i class="fa-solid fa-splotch"></i> drone.pilot</button>`,
        `<button class="btn btn-outline-info btn-block">> <i class="fa-solid fa-camera-retro"></i> amateur.photographer</button>`
      ],
      typeSpeed: 75,
      loop: true
    })
  }
}