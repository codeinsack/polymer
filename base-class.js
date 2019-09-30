import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"

export class BaseClass extends PolymerElement {
  static get template() {
    return html`
      <p>This content has been inherited from BaseClass.</p>`
  }
}

customElements.define("base-class", BaseClass)
