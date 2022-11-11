import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: [
        `dog.dad`,
        `bootcamp.teacher`,
        `drone.pilot`,
        `amateur.photographer`
      ],
      typeSpeed: 75,
      loop: true
    })
  }
}