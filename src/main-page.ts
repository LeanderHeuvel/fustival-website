import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../out-tsc/src/video/video-engine.js';
import '../../out-tsc/src/stories/story-element.js';

const white = css`#E9EAEC`;
const yellow = css`#FAD02C;`;
const liters = 0;
const beer = 600;
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
      margin-top: 23px;
      background: rgba(233, 234, 236, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
      height: 600px;
      bottom: 0px;
      background: #fad02c;
      border-radius: 1px;
      animation-name: beer-rise;
      animation-duration: 0.7s;
      animation-delay: 0.2s;
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
    .video-overlay {
      position: absolute;
      height: 1000px;
      width: 100%;
      top: 0px;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(3px);
      margin-bottom: 0px;
    }
    .video-overlay:hover {
      -webkit-filter: blur(15px);
      -moz-filter: blur(15px);
      -ms-filter: blur(15px);
      filter: blur(15px);
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
      width: 48%;
      height: 43px;
      background: rgba(255, 208, 44, 0.5);
      border: 2px solid #fad02c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(2px);
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

    .buttons {
      width: 90%;
      height: 100%;
    }
    .three-col:after {
      content: '';
      display: table;
      clear: both;
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
              <div class="row" style="display: flex;">
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
                  <div class="col story"><story-element></story-element></div>
                  <div class="col story"><story-element></story-element></div>
                  <div class="col story"><story-element></story-element></div>
                </div>
              </div>
                <div class='row buttons'>
                  <div class='three-col'>
                    <div class="col button">Machtig nu</div>
                    <div class="col button" style="float: right;">Ervaar</div>
                  </div>  
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
