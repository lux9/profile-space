import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["&#8594;  Full-stack RoR Developer", ` &#8594;`],
      typeSpeed: 50,
      loop: true
    })
  }
}