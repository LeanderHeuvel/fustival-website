import { LitElement, html, css } from 'lit';
import { property, customElement, eventOptions } from 'lit/decorators.js';

@customElement('story-page')
export class StoryPage extends LitElement {
  @property({ type: Boolean, reflect: true })
  visibility: boolean = true;

  @property()
  index: number = 0;

  public content = ['../../../../assets/pictures/308A1046.jpg'];

  static styles = css`
    .container {
      position: relative;
      height: 100px;
      width: 100px;
    }
    img {
      left: -100px;
      top: -100px;
      z-index: 10000;
    }

    .button {
      border: none;
      background-color: transparent;
    }
  `;

  @eventOptions({ passive: true })
  public nextPicture() {
    this.index += 1;
  }

  render() {
    return html`
      <button @click=${this.nextPicture} class="container button">
        ${this.index}
        <img
          src=${this.content[this.index]}
          style="width:300px; position:absolute; z-index:50000;"
          alt="fustival vorig jaar"
        />
        <!-- <img src='../../assets/pictures/308A1046.jpg' alt= "fustival vorig jaar"> -->
      </button>
    `;
  }
}
