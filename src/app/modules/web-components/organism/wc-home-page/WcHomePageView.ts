import { html, TemplateResult } from 'lit-html';
import { HomePageTheme } from './css/home-page.css';
import { CSSResultArray } from 'lit-element';
import { WcHomePageViewModel } from './WcHomePageViewModel';

export class WcHomePageView extends WcHomePageViewModel {
  static getStyles = (): CSSResultArray => [HomePageTheme.homePageTheme];

  protected render = (): TemplateResult => html`
    <div class="wrapper">
      ${this.renderIcon()}
      ${this.renderHeader()}
      ${this.renderCounter()}
      ${this.renderButton()}
    </div>`;

  protected renderIcon = (): TemplateResult => html`
    <mwc-icon class="lock">lock</mwc-icon>`;

  protected renderHeader = (): TemplateResult => html`
    <h1>Create new player</h1>`;

  protected renderCounter = (): TemplateResult => html`
    <mwc-textfield
      id="Name"
      name="Name"
      value="${this.name}"
      label='Name'
      required
      @input=${(e: any) => this._nameChanged(e)}>
    </mwc-textfield>`;

  protected renderButton = (): TemplateResult => html`
    <mwc-button raised label="Join"
      @click=${() => this._enterGame()}>
    </mwc-button>`;

}

window.customElements.define('wc-home-page', WcHomePageView);
