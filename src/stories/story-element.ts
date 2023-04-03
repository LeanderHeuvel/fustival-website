import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('story-element')
export class StoryElement extends LitElement {
  static styles = css`
    .container {
      width: 100%;
      height: 100%;
      padding-bottom: 10px;
    }
    .outer-circle {
      height: 86px;
      width: 86px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.06);
      border: 4px solid #333652;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(2px);
      margin: auto;
    }
    .highlight {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #e9eaec;
      margin: auto;
      margin-top: 3px;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="outer-circle">
          <div class="highlight"></div>
        </div>
      </div>
    `;
  }
}
