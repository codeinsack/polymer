import { html } from "@polymer/polymer/polymer-element.js"

import { BaseClass } from "./base-class"

class ChildClass extends BaseClass {
  static get properties() {
    return {
      first: String,
      last: String,
      fullName: {
        type: String,
        computed: "computeFullName(first, last)",
      }
    }
  }

  computeFullName(first, last) {
    return first + ' ' + last
  }

  handleNameChange(event) {
    this.first = event.target.value
    console.log(event.target.value)
  }

  static get template() {
    return html`
      <p>This content is from ChildClass.</p>
      <h3>My name is <span>{{fullName}}</span></h3>
      <input type="text" on-change="handleNameChange">
      <p>${super.template}</p>
      <p>Hello again from ChildClass.</p>
    `;
  }
}

customElements.define("child-class", ChildClass)
