import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
// import '../../out-tsc/src/video/video-element.js';

@customElement('video-engine')
export class VideoEngine extends LitElement {
  static styles = css`
    body {
      background-color: black;
      font-family: 'Commissioner';
      font-size: 22px;
    }
  `;

  connectedCallback() {
    // load data
  }

  // render videos

  render() {
    return html``;
  }
}
