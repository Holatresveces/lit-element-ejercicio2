import { LitElement, html } from "lit-element";
import "./myList";

class MyApp extends LitElement {
  static get properties() {
    return {
      listItems: { type: Array },
    };
  }

  constructor() {
    super();
    this.listItems = [
      {
        id: 1,
        name: "Arrival",
        year: 2016,
      },
      {
        id: 2,
        name: "Paprika",
        year: 2006,
      },
      {
        id: 3,
        name: "Airplane!",
        year: 1980,
      },
      {
        id: 4,
        name: "Jojo Rabbit",
        year: 2020,
      },
      {
        id: 5,
        name: "Ya no sé cuál poner",
        year: 2077,
      },
    ];
  }

  render() {
    return html`
      <my-list title="My Favorite Movies" .items=${this.listItems}></my-list>
    `;
  }
}

customElements.define("my-app", MyApp);
