import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../../out-tsc/src/main-page.js';

@customElement('fustival-app')
export class FustivalApp extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    body {
      background-color: black;
      font-family: 'Commissioner';
      font-size: 22px;
    }
  `;

  render() {
    return html` <main-page></main-page> `;
  }
}
