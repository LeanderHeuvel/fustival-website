import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../../../out-tsc/src/stories/story-page.js';

@customElement('story-element')
export class StoryElement extends LitElement {
  @property()
  source?: string;

  @property()
  visibility = false;

  static styles = css`
    .container {
      background-color: transparent;
      border: none;
      width: 100%;
      height: 100%;
      padding-bottom: 10px;
      z-index: 1000;
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

  private openStory() {
    const name = 'openStory';
    this.dispatchEvent(
      new CustomEvent(name, { detail: { message: this.source } })
    );
  }

  render() {
    return html`
      <button @click=${this.openStory} class="container">
        <div class="outer-circle">
          <div class="highlight"></div>
        </div>
      </button>
      <story-page ?hidden=${!this.visibility} name="vorig jaar"></story-page>
    `;
  }
}
