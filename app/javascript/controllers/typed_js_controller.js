import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: [
        `<button>amateur photographer</button>`,
        `<button>amateur photographer</button>`,
        `<button>drone pilot</button>`
      ],
      typeSpeed: 50,
      loop: true
    })
  }
}