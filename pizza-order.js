import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "@polymer/polymer/lib/elements/dom-repeat.js"

class PizzaOrder extends PolymerElement {
  static get properties() {
    return {
      menuItems: {
        type: Array,
        value() {
          return [
            {name: 'Pizza', ordered: 0},
            {name: 'Pasta', ordered: 0},
            {name: 'Toast', ordered: 0}
          ];
        }
      }
    };
  }

  order(event) {
    console.log("event.model.item", event.model.item)
    event.model.set("item.ordered", event.model.item.ordered + 1)
  }

  static get template() {
    return html`
      <h2>Pizza ordering</h2>
      <template is="dom-repeat" id="menu" items="{{menuItems}}">
        <div>
          <span>{{item.name}}</span>
          <span>{{item.ordered}}</span>
          <button on-click="order">Order</button>
        </div>
      </template>
    `;
  }
}

customElements.define("pizza-order", PizzaOrder)
