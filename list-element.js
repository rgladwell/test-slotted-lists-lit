import {LitElement, html, css} from 'lit-element';

export class ListElement extends LitElement {

  static get styles() {
    return css`
    ::slotted(ul) {
      color: green;
    }

    ::slotted(li) {
      color: red;
    }`
  }

  render() {
    return html`<slot></slot>`
  }
}

window.customElements.define('list-element', ListElement);
