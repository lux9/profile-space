import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: [
        `amateur.photographer`,
        `drone.pilot`,
        `dog.dad`,
        `bootcamp.teacher`
      ],
      typeSpeed: 75,
      loop: true
    })
  }
}