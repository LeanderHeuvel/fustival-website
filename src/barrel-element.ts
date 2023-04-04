import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('barrel-element')
export class BarrelElement extends LitElement {
  @property()
  name?: string;

  @property()
  picture = '';

  static styles = css`
    .barrel-main {
      position: absolute;
      width: 80px;
      height: 110px;
      left: 4px;
      background: #d3d3d3;
      border-radius: 13px;
      bottom: 0px;
    }
    .name {
      color: black;
      font-size: 10px;
      vertical-align: baseline;
      position: absolute;
      bottom: 16px;
      width: 100%;
      left: 2px;
      font-weight: 1200;
    }
    .side {
      position: relative;
      width: 88px;
      height: 10px;
      left: 0px;
      top: 90px;
      background: #d3d3d3;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 13px;
    }
    .middle {
      top: 60px;
    }
    .top {
      top: 20px;
    }
    .container {
      width: 100%;
      height: 120px;
      margin: 5px;
      position: relative;
    }
    .parent {
      float: left;
    }
  `;

  render() {
    return html`
      <div class="parent">
        <div class="container">
          <div class="side"></div>
          <div class="side middle"></div>
          <div class="side top"></div>
          <div class="barrel-main">
            <img
              src="../../${this.picture}"
              alt="logo of owner"
              style="width: 80px; z-index:100;"
            />
            <span class="name">${this.name}</span>
          </div>
        </div>
      </div>
    `;
  }
}
