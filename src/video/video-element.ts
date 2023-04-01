import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../../out-tsc/src/main-page.js';

const video = 'path';
@customElement('video-element')
export class VideoElement extends LitElement {
  @property({ type: Number }) header = 0;

  static styles = css`
    body {
      background-color: black;
    }
  `;

  render() {
    return html`
      <video width="100%" autoplay muted loop>
        <source src=${video} type="video/mp4" />
        <!-- Your browser does not support the video tag. -->
      </video>
    `;
  }
}
