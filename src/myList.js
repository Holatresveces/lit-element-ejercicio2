import { LitElement, html } from "lit-element";

class MyList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.items = [];
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <ul>
        ${this.items.map((item) => {
          return html` <li>${item.name} (${item.year})</li> `;
        })}
      </ul>
    `;
  }
}

customElements.define("my-list", MyList);
