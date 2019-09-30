import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import "@polymer/polymer/lib/elements/dom-repeat.js"
import "@polymer/polymer/lib/elements/array-selector.js"

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

  computeFilter(string) {
    if (!string) {
      return null;
    } else {
      string = string.toLowerCase();
      return function(employee) {
        const name = employee.name.toLowerCase()
        return name.indexOf(string) !== -1
      };
    }
  }

  toggleSelection(e) {
    const item = this.$.menuItems.itemForElement(e.target);
    this.$.selector.select(item);
  }

  static get template() {
    return html`
      <h2>Pizza ordering</h2>
      <input value="{{searchString::input}}"><br/><br/>
      <template
        id="menuItems"
        is="dom-repeat" 
        items="{{menuItems}}" 
        filter="{{computeFilter(searchString)}}"
      >
        <div>
          <span>{{item.name}}</span>
          <span>{{item.ordered}}</span>
          <button on-click="order">Order</button>
          <button on-click="toggleSelection">Select</button>
        </div>
      </template>
      <br /><br />
      <array-selector id="selector" items="{{menuItems}}" selected="{{selected}}" multi toggle></array-selector>
      <div><b>Selected orders</b></div><br />
      <template is="dom-repeat" items="{{selected}}">
          <div>Name: <span>{{item.name}}</span></div>
          <div>Count: <span>{{item.ordered}}</span></div>
          <br />
      </template>
    `;
  }
}

customElements.define("pizza-order", PizzaOrder)
