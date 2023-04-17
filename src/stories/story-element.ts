import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../../../out-tsc/src/stories/story-page.js';

@customElement('story-element')
export class StoryElement extends LitElement {
  @property()
  source?: string;

  @property()
  icon: string = 'photo_library';

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
    span,
    i {
      color: #333652;
      font-family: 'Material Icons';
      content: '\e5cc';
      /* font-weight: 400; */
      font-size: 50px;
      margin: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .center-align {
      width: 100%;
      height: 100%;
      /* text-align: center; */
      /* margin: auto; */
      display: block;
      position: relative;
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
          <div class="highlight">
            <div class="center-align">
              <span class="material-icons 24">${this.icon}</span>
            </div>
          </div>
        </div>
      </button>
      <story-page ?hidden=${!this.visibility} name="vorig jaar"></story-page>
    `;
  }
}
