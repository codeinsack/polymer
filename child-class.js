import { html } from "@polymer/polymer/polymer-element.js"

import { BaseClass } from "./base-class"

class ChildClass extends BaseClass {
  static get template() {
    return html`
      <p>This content is from ChildClass.</p>
      <p>${super.template}</p>
      <p>Hello again from ChildClass.</p>
      `;
  }
}

customElements.define("child-class", ChildClass)
