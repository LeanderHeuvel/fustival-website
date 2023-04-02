import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../out-tsc/src/video/video-engine.js';
import '../../out-tsc/src/stories/story-element.js';

const white = css`#E9EAEC`;
const yellow = css`#FAD02C;`;
const liters = 1400;
@customElement('main-page')
export class FustivalApp extends LitElement {
  static styles = css`
    div {
      font-family: 'Commissioner';
    }
    .box {
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(2px);
      text-align: center;
    }
    .container {
      z-index: 2;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
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
      margin: auto;
      margin-top: 10px;
    }
    .background {
      color: black;
    }
    .center-margin {
      margin: auto;
      width: 98%;
    }
    .vertical-pipe {
      z-index: 1;
      width: 12px;
      height: 900px;
      margin-top: 0px;
      background: rgba(233, 234, 236, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .beer {
      position: absolute;
      margin-left: 3px;
      margin-top: 2px;
      top: 400px;
      width: 6px;
      height: 580px;
      bottom: 0;
      background: #fad02c;
      border-radius: 1px;
    }
    .col {
      margin: 0px;
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
      display: table;
      clear: both;
    }
    .horizontal-pipe {
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 20px;
      height: 13px;
      background: rgba(233, 234, 236, 0.8);
      position: relative;
    }
    .video-overlay {
      position: absolute;
      height: 1000px;
      width: 100%;
      top: 0px;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(3px);
      margin-bottom: 0px;
    }
    .stories {
      width: 90%;
      height: 100%;
      border: 2px solid ${yellow};
      z-index: 1;
      color: ${yellow};
      font-size: 25px;
      margin-top: 10px;
    }
    .button {
      border: 2px solid ${yellow};
      width: 40%;
      height: 43px;
      background: rgba(255, 255, 255, 0.06);
      border: 2px solid #fad02c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(2px);
      margin-top: 5px;
    }
  `;

  render() {
    return html`
      <video width="100%" autoplay muted loop>
        <source src="assets/filmpje.mp4" type="video/mp4" />
        <!-- Your browser does not support the video tag. -->
      </video>
      <div class="container">
        <div class="center-margin">
          <div class="box top">Achelous Fustival</div>
          <div class="row">
            <div class="col left">
          <div class="horizontal-pipe"></div>   
              <div class="vertical-pipe"></div>
              <div class="beer"></div>
            </div>
            <div class="col right">
              <div class="box beer-count">${liters}L bier gemachtigd</div>
              <div class="box stories">Bekijk
                <div class="row">
                  <div class="col story"><story-element></story-element></div>
                  <div class="col story"><story-element></story-element></div>
                  <div class="col story"><story-element></story-element></div>
                </div>
              </div>
              <div class='row'>
                    <div class="col button"></div>
                    <div class="col" style="min-width: 30px;"></div>
                    <div class="col button"></div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-overlay"></div>
    `;
  }
}
