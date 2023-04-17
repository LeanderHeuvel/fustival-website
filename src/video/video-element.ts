import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

const white = css`#E9EAEC`;
const yellow = css`#FAD02C;`;
const blurBox = css`40px`;

@customElement('video-element')
export class VideoElement extends LitElement {
  @property({ type: Boolean, reflect: true })
  visibility: boolean = true;

  @property()
  index: number = 0;

  @property()
  name: string = 'video_index.txt';

  @property({ type: String }) set nameChange(name: string) {
    this.loadInformation(name);
    this.content = [];
  }

  public content: string[] = [];

  static styles = css`
    .container {
      position: relative;
      width: 100%;
      z-index: 9;
    }
    video {
      /* top: 0; */
      left: 0;
      height: 100%;
      object-fit: cover;
      /* max-height: 100vh; */
      object-fit: cover;
      width: 100%;
      margin: auto;
    }

    .clickable {
      border: none;
      background-color: transparent;
      width: 100%;
      height: 100%;
      margin: auto;
      display: block;
      position: absolute;
    }
    .button {
      border: 2px solid ${yellow};
      width: 80%;
      height: 43px;
      background: rgba(255, 208, 44, 0.5);
      border: 2px solid #fad02c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: rgba(256, 256, 256, 0.05);
      backdrop-filter: blur(${blurBox});
      -webkit-backdrop-filter: blur(${blurBox});
      color: ${yellow};
      font-family: 'Commissioner';
      font-size: 25px;
      text-align: center;
      display: block;
      margin: auto;
      margin-top: 10px;
    }
    .button:hover {
      background: rgba(255, 208, 44, 1);
      color: ${white};
    }
    div {
      font-family: 'Commissioner';
    }
    .vertical-pipe {
      position: absolute;
      z-index: 300;
      left: 1%;
      top: 0;
      bottom: 0;
      width: 12px;
      background: rgba(233, 234, 236, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .top {
      position: relative;
      z-index: 300;
      width: 80%;
      height: 45px;
      left: 4%;
      border: 2px solid ${white};
      color: ${white};
      font-size: 30px;
      text-align: center;
      margin: auto;
      display: block;
      margin-top: 10px;
      background: rgba(256, 256, 256, 0.05);
      backdrop-filter: blur(${blurBox});
      -webkit-backdrop-filter: blur(${blurBox});
    }
    .center-margin {
      margin-top: auto;
      width: 98%;
    }
  `;

  public nextPicture() {
    const promise = this.renderRoot.querySelector('video') ?? null ?? undefined;
    if (promise?.paused) {
      promise.play();
    } else if (this.index < this.content.length - 1) {
      this.index += 1;
      if (promise !== undefined) promise.src = this.content[this.index];
    } else {
      this.closeStory();
    }
  }

  public async loadInformation(name: string) {
    if (name !== 'default') {
      const basepath = '../../assets/';
      const path = basepath.concat(name);
      await fetch(path)
        .then(response => response.text())
        .then(text => text.split('\n'))
        .then(text =>
          text.map(x => this.content.push(basepath.concat('videos/').concat(x)))
        );
    }
    this.requestUpdate();
  }

  private closeStory() {
    const promise = this.renderRoot.querySelector('video') ?? null ?? undefined;
    this.index = 0;
    if (promise !== undefined) promise.src = this.content[this.index];
    const close = new CustomEvent('closeStory', {
      detail: {
        message: 'video',
      },
    });
    this.dispatchEvent(close);
    promise?.pause();
  }

  render() {
    return html`
      <div style="position: absolute; width:100%;">
        <div class="top">Achelous Fustival</div>
      </div>
      <div class="center-margin"><div class="vertical-pipe"></div></div>

      <div style="background-color: black; min-height:100%;" class="container">
        <button @click=${this.nextPicture} class="container clickable">
          <video autoplay preload="auto">
            <source src=${this.content[this.index]} alt="fustival vorig jaar" />
          </video>
        </button>
        <div
          style="position:absolute; bottom: 100px;width:100%; margin: 0 auto; display: block; z-index:200"
        >
          <button @click=${this.closeStory} class="button">
            Machtig een fust
          </button>
          <button @click=${this.closeStory} class="button">Home</button>
        </div>
      </div>
    `;
  }
}
