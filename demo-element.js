import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';

import './icon-toggle.js';

class DemoElement extends PolymerElement {
  _message(fav) {
    if (fav) {
      return 'You really like me!';
    }
    else {
      return 'Do you like me?';
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
      </style>
      
      <h3>Statically-configured icon-toggles</h3>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>
        
      <h3>Data-bound icon-toggle</h3>
      <div><span>[[_message(isFav)]]</span></div>
      <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>
    `;
  }
}
customElements.define('demo-element', DemoElement);