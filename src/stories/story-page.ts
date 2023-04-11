import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

const white = css`#E9EAEC`;
const yellow = css`#FAD02C;`;

@customElement('story-page')
export class StoryPage extends LitElement {
  @property({ type: Boolean, reflect: true })
  visibility: boolean = true;

  @property()
  index: number = 0;

  @property()
  name: string = 'picture_index.txt';

  @property({ type: String }) set nameChange(name: string) {
    this.loadInformation(name);
  }

  public content: string[] = [];

  static styles = css`
    .container {
      position: relative;
      width: 100%;
      z-index: 9;
    }
    img {
      top: 0;
      left: 0;
      width: 100%;
    }

    .clickable {
      border: none;
      background-color: transparent;
      width: 100%;
      height: 100%;
    }
    .button {
      border: 2px solid ${yellow};
      width: 80%;
      height: 43px;
      background: rgba(255, 208, 44, 0.5);
      border: 2px solid #fad02c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(2px);
      color: ${yellow};
      font-family: 'Commissioner';
      font-size: 25px;
      text-align: center;
      z-index: 10000;
    }
    .button:hover {
      background: rgba(255, 208, 44, 1);
      color: ${white};
    }
  `;

  public nextPicture() {
    if (this.index < this.content.length - 1) {
      this.index += 1;
      this.requestUpdate();
    } else this.closeStory();
  }

  public async loadInformation(name: string) {
    if (name !== 'default') {
      const basepath = '../../assets/';
      const path = basepath.concat(name);
      await fetch(path)
        .then(response => response.text())
        .then(text => text.split('\n'))
        .then(text =>
          text.map(x =>
            this.content.push(basepath.concat('pictures/').concat(x))
          )
        );
    }
    this.requestUpdate();
  }

  private closeStory() {
    this.index = 0;
    const close = new CustomEvent('closeStory', {
      detail: {
        message: 'pictures_last_year',
      },
    });
    this.dispatchEvent(close);
  }

  render() {
    return html`
      <div style="background-color: black;" class="container">
        <button @click=${this.nextPicture} class="container clickable">
          <img src=${this.content[this.index]} alt="fustival vorig jaar" />
        </button>
        <button @click=${this.closeStory} class="button">
          Machtig een fust
        </button>
      </div>
    `;
  }
}
