import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '../../out-tsc/src/video/video-engine.js';
import '../../out-tsc/src/stories/story-element.js';
import '../../out-tsc/src/barrel-element.js';

const white = css`#E9EAEC`;
const yellow = css`#FAD02C;`;
const darkYellow = css`#bc9700;`;
const liters = 0;
const beer = 600;
const blurBox = css`40px`;

@customElement('main-page')
export class FustivalApp extends LitElement {
  @property()
  barrels = ['Achelous', 'Oud-Achelous', 'Acherowus'];

  @property()
  logos = [
    'assets/logos/Achelogo_zonder_achtergrond.png',
    'assets/logos/Achelogo_zonder_achtergrond.png',
    'assets/logos/Achelogo_zonder_achtergrond.png',
  ];

  static styles = css`
    div {
      font-family: 'Commissioner';
    }
    .box {
      transform: translate3d(0, 0, 0);
      box-sizing: border-box;
      background: rgba(256, 256, 256, 0.05);
      backdrop-filter: blur(${blurBox});
      -webkit-backdrop-filter: blur(${blurBox});
      text-align: center;
      /* box-shadow: inset -4px 0px 5px black; */
    }
    .container {
      z-index: 2;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
    }
    .beer-count {
      width: 90%;
      height: 40px;
      border: 2px solid ${yellow};
      z-index: 1;
      color: ${yellow};
      font-size: 25px;
      margin-top: 10px;
    }

    .top {
      height: 45px;
      z-index: 1;
      border: 2px solid ${white};
      color: ${white};
      font-size: 30px;
      text-align: center;
      margin: 0 auto;
    }
    .background {
      color: black;
    }
    .center-margin {
      margin: auto;
      width: 98%;
      height: calc(100% - 10px);
      padding-top: 10px;
    }
    .vertical-pipe {
      width: 12px;
      height: calc(100% - 78px);
      background: rgba(233, 234, 236, 0.8);
      backdrop-filter: blur(${blurBox});
      -webkit-backdrop-filter: blur(${blurBox});
      /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
      bottom: 0;
      position: absolute;
    }
    @keyframes beer-rise {
      from {
        height: 0px;
      }
      to {
        height: ${beer}px;
      }
    }
    .beer {
      position: absolute;
      margin-left: 3px;
      margin-top: 2px;
      width: 6px;
      height: 500px;
      bottom: 0px;
      background: #fad02c;
      border-radius: 1px;
      animation-name: beer-rise;
      animation-duration: 0.7s;
      animation-delay: 0.2s;
    }
    .col {
      margin: 0px;
      height: 100%;
      float: left;
    }
    .story {
      width: 33%;
    }
    .left {
      width: 10%;
    }
    .right {
      width: 90%;
    }
    .row:after {
      content: '';
      display: flex;
      clear: both;
    }
    .horizontal-pipe {
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 23px;
      height: 13px;
      width: 100%;
      background: rgba(233, 234, 236, 0.8);
    }
    @keyframes horizontal-beer-rise {
      from {
        width: 0px;
      }
      to {
        width: 40px;
      }
    }
    .horizontal-beer {
      position: absolute;
      top: 280px;
      margin-left: 8px;
      /* left:14px; */
      background-color: ${yellow};
      height: 6px;
      width: 40px;
      animation-name: horizontal-beer-rise;
      animation-duration: 0.4s;
      animation-delay: 0.5s;
    }
    .button-connection {
      margin-top: 185px;
      margin-left: 0px;
    }
    video {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    .video-overlay {
      transform: translate3d(0, 0, 0);
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0px;
      background: rgba(0, 0, 0, 0.4);
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(3px);
      margin-bottom: 0px;
      z-index: -1;
    }
    .stories {
      width: 90%;
      height: 150px;
      border: 2px solid ${yellow};
      z-index: 1;
      color: ${yellow};
      font-size: 25px;
      margin-top: 10px;
    }
    .barrels {
      width: 90%;
      height: 170px;
      border: 2px solid ${yellow};
      z-index: 1;
      color: ${yellow};
      font-size: 25px;
      margin-top: 10px;
    }

    .button {
      border: 2px solid ${yellow};
      width: 48%;
      height: 43px;
      background: rgba(255, 208, 44, 0.5);
      border: 2px solid #fad02c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transform: translate3d(0, 0, 0);
      -webkit-backdrop-filter: blur(${blurBox});
      backdrop-filter: blur(${blurBox});
      margin-top: 5px;
      color: ${yellow};
      font-family: 'Commissioner';
      font-size: 25px;
      text-align: center;
    }
    .button:hover {
      background: rgba(255, 208, 44, 1);
      color: ${white};
    }
    ol {
      font-size: 20px;
      text-align: left;
    }
    a {
      color: ${darkYellow};
    }

    .buttons {
      width: 90%;
    }
    .three-col:after {
      content: '';
      display: table;
      clear: both;
    }
    .horiz-scroll {
      /* width: 400px; */
      height: 140px;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .example::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .example {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  `;

  private _openStory(e: CustomEvent) {
    const name = 'openStory';
    const promise = this.renderRoot.querySelector('video') ?? null ?? undefined;
    promise?.pause();
    this.dispatchEvent(
      new CustomEvent(name, { detail: { message: e.detail.message } })
    );
  }

  firstUpdated() {}

  private activateBackground() {
    const promise = this.renderRoot.querySelector('video') ?? null ?? undefined;
    promise?.play();
  }

  render() {
    return html`
      
      <div @click=${this.activateBackground} @keyup=${
      this.activateBackground
    } class="container">
      <video width="100%" autoplay muted playsinline loop>
        <source src="assets/filmpje_nosound.mp4" type="video/mp4" />
        <!-- Your browser does not support the video tag. -->
      </video>
      <div class="video-overlay"></div>
        <div class="center-margin">
          <div class="box top">Achelous Fustival</div>
          <div class="row" style="height: calc(100% - 45px);">
            <div class="col left">
              <div class="row" style="display: flex; height:100%;">
                <div class="col" style="width:12px">
                  <div class="vertical-pipe"></div>
                  <div class="horizontal-beer"></div>
                  <div class="beer"></div>
                </div>
                <div class="col" style="flex-grow: 1;">
                  <div class="horizontal-pipe"></div>
                   <div class="horizontal-pipe button-connection"></div>   
                </div>
              </div>
            </div>
            <div class="col right">
              <div class="box beer-count">${liters}L bier gemachtigd</div>
              <div class="box stories">Bekijk
                <div class="row">
                  <div class="col story"><story-element  source="picture_index.txt" icon="photo_camera" @openStory = ${
                    this._openStory
                  }></story-element></div>
                  <div class="col story"><story-element source="videos_index.txt" icon="play_circle" @openStory = ${
                    this._openStory
                  } ></story-element></div>
                  <div class="col story"><story-element @openStory = ${
                    this._openStory
                  } source="machtigingen.txt" icon="sports_bar"></story-element></div>
                </div>
              </div>
                <div class='row buttons'>
                  <div class='three-col'>
                    <div  class="col button">Machtig nu</div>
                    <div class="col button" style="float: right;">Ervaar</div>
                  </div>  
                </div>
                <div class="box barrels">
                  <div><p1>zij gingen jullie voor</p1></div>
                  <div class="horiz-scroll">
                    <div style="width:500px;">
                    ${this.barrels.map(
                      (name, index) =>
                        html`<barrel-element
                          name=${name}
                          picture=${this.logos[index]}
                        ></barrel-element>`
                    )} 
                    </div>
                  </div>
                </div>
                <div class="box barrels" style="height:auto;">
                  <div style="background-color: ${white}"><p1>Hoe het werkt</p1></div>
                  <ol>
                    <li>Bedenk met wie je een fust wil machtigen.</li>
                    <li>Machtig een fust via de <a href="https://leden.phocasnijmegen.nl/machtigingen/306">Phocas site</a></li>
                    <li>Neem een kort filmpje op waarin jullie je fust aanbieden</li>
                    <li>Kom 18 mei naar de Villa</li>
                  </ol>
                </div>

              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      
      
    `;
  }
}
