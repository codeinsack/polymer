import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this.toggle.bind(this));
  }

  static get properties() {
    return {
      toggleIcon: {
        type: String
      },
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
    };
  }

  toggle() {
    this.pressed = !this.pressed;
  }

  static get template() {
    return html`
    <style>
      :host {
        display: inline-block;
      }
      iron-icon {
        fill: var(--icon-toggle-color);
        stroke: var(--icon-toggle-outline-color);
      }
      :host([pressed]) iron-icon {
        fill: var(--icon-toggle-pressed-color);
      }
    </style>
    
      <iron-icon icon="[[toggleIcon]]"></iron-icon>
    `;
  }
}

customElements.define('icon-toggle', IconToggle);