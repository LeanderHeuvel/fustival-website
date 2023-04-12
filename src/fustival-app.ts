import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../out-tsc/src/main-page.js';
import '../../out-tsc/src/stories/stories-page.js';

@customElement('fustival-app')
export class FustivalApp extends LitElement {
  @property({ type: String }) header = 'My app';

  @property()
  public visibility: boolean = true;

  @property()
  classes = { slide: true, up: false };

  @property()
  storyClasses = { topmidstart: true, topmid: false };

  @property()
  storyName = 'default';

  static styles = css`
    body {
      background-color: black;
      font-family: 'Commissioner';
      font-size: 22px;
    }
    .slide {
      position: absolute;
      bottom: 0px; /* SET THE SLIDER TO BE OFFSCREEN INITIALLY */
      width: 100%;
      height: 100%;
      background: black;
      transition: 1s;
    }
    .topmidstart {
      position: absolute;
      top: -110%; /* SET THE SLIDER TO BE OFFSCREEN INITIALLY */
      width: 100%;
      height: 800px;
      background: black;
      transition: 1s;
    }
    .topmid {
      transition: 1s;
      top: 0px;
    }
    .wrapper {
      height: 100%;
    }

    .up {
      transition: 1s;
      bottom: -1000px; /* SET THE SLIDER TO BE 0 */
    }
  `;

  private async openStory(e: CustomEvent) {
    this.storyName = e.detail.message;
    this.storyClasses.topmid = true;
    this.classes.up = false;
    // this.visibility=false;
    this.requestUpdate();
  }

  private async closeStory() {
    this.storyClasses.topmid = false;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="wrapper">
        <story-page
          nameChange=${this.storyName}
          id="storypage"
          class=${classMap(this.storyClasses)}
          @closeStory=${this.closeStory}
          name="vorig jaar"
        ></story-page>
      </div>
      <div class="wrapper">
        <main-page
          class=${classMap(this.classes)}
          ?hidden=${!this.visibility}
          @openStory=${this.openStory}
        ></main-page>
      </div>
    `;
  }
}
