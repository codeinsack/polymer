import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "@polymer/iron-icons/iron-icons.js"

import "./icon-toggle.js"

class DemoElement extends PolymerElement {
  constructor() {
    super()
    console.log("[DemoElement] constructor")
  }

  static get properties() {
    return {
      book: {
        type: Object,
        reflectToAttribute: true,
      },
    }
  }

  connectedCallback() {
    super.connectedCallback()
    console.log("[DemoElement] connectedCallback", this.book)
  }
  //
  // disconnectedCallback() {
  //   super.disconnectedCallback()
  //   console.log("[DemoElement] disconnectedCallback")
  // }
  //
  ready() {
    super.ready()
    console.log("[DemoElement] ready")
    this.book = { title: "The Catcher in the Rye" }
  }
  //
  // attributeChangedCallback() {
  //   super.attributeChangedCallback()
  //   console.log("[DemoElement] attributeChangedCallback")
  // }

  _message(fav) {
    if (fav) {
      return "You really like me!"
    }
    else {
      return "Do you like me?"
    }
  }

  static get template() {
    return html`
      <style>
      :host {
        font-family: sans-serif;
        --icon-toggle-color: yellow;
        --icon-toggle-outline-color: black;
      }
      h2 {
        color: chocolate;
      }
      </style>
      
      <h2><slot name="header"></slot></h2>
      
      <h3>Statically-configured icon-toggles</h3>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>
        
      <h3>Data-bound icon-toggle</h3>
      <div><span>[[_message(isFav)]]</span></div>
      <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>
      
      <h2><slot name="footer"></slot></h2>
    `;
  }
}
customElements.define("demo-element", DemoElement)
