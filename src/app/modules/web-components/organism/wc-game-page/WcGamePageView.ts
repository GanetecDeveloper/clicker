import { html, nothing, TemplateResult } from 'lit-html';
import { GamePageTheme } from './css/GamePageTheme.css';
import { CSSResultArray } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { WcGamePageViewModel } from './WcGamePageViewModel';

export class WcGamePageView extends WcGamePageViewModel {
  static getStyles = (): CSSResultArray => [GamePageTheme.gamePageTheme];

  protected render = (): TemplateResult => html`
    <div class="wrapper">
      ${this.renderHeader()}
      ${this.renderPoints()}
      ${this.renderMergeButton()}
      ${this.isButtonVisible() ? this.renderBuyButton() : nothing}
    </div>`;

  protected renderHeader = (): TemplateResult => html`
    <mwc-top-app-bar-fixed dense centerTitle>
      <div slot="title">${this.renderTitle()}</div>
      ${this.renderPauseButton()}
      ${this.renderExitButton()}
    </mwc-top-app-bar-fixed>`;

  protected renderTitle = (): TemplateResult => html`
    Hi, ${ifDefined(this.user!.name)}`;

  protected renderPauseButton = (): TemplateResult => html`
    <mwc-icon-button
      icon="pause"
      slot="actionItems"
      @click=${() => this._tooglePause()}>
    </mwc-icon-button>`;

  protected renderExitButton = (): TemplateResult => html`
    <mwc-icon-button
      icon="arrow_forward_ios"
      slot="actionItems"
      @click=${() => this._exit()}>
    </mwc-icon-button>`;

  protected renderPoints = (): TemplateResult => html`
    <h3>Merged pull request: ${this.points}</h3>
    <h3>Auto Mergers: ${this.autoClickers}</h3>`;

  protected renderMergeButton = (): TemplateResult => html`
    <mwc-button raised
      label="Merge"
      @click=${() => this._addPoint()}>
    </mwc-button>`;

  protected renderBuyButton = (): TemplateResult => html`
    <mwc-button raised
      label="Buy auto merger (${this.autoClickerCost})"
      ?disabled=${this.isButtonDisabled()}
      @click=${() => this._addAutoclicker()}>
    </mwc-button>`;

}

window.customElements.define('wc-game-page', WcGamePageView);
