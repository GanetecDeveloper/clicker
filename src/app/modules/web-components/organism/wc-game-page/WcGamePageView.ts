import { html, nothing, TemplateResult } from 'lit-html';
import { GamePageTheme } from './css/GamePageTheme.css';
import { CSSResultArray } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { WcGamePageViewModel } from './WcGamePageViewModel';

/**
 * Vista del web component GamePage.
 */
export class WcGamePageView extends WcGamePageViewModel {
  static getStyles = (): CSSResultArray => [GamePageTheme.gamePageTheme];

  /**
   * Render principal del componente.
   * @returns El templateResult que contiene
   * las llamadas a los demás renders.
   */
  protected render = (): TemplateResult => html`
    <div class="wrapper">
      ${this.renderHeader()}
      ${this.renderPoints()}
      ${this.renderMergeButton()}
      ${this.isButtonVisible() ? this.renderBuyButton() : nothing}
    </div>`;

  /**
   * Renderiza la cabecera.
   * @returns El templateResult que contiene la cabecera.
   */
  protected renderHeader = (): TemplateResult => html`
    <mwc-top-app-bar-fixed dense centerTitle>
      <div slot="title">${this.renderTitle()}</div>
      ${this.renderPauseButton()}
      ${this.renderExitButton()}
    </mwc-top-app-bar-fixed>`;

  /**
   * Renderiza el titulo de la cabecera.
   * @returns El templateResult que contiene el titulo de la cabecera.
   */
  protected renderTitle = (): TemplateResult => html`
    Hi, ${ifDefined(this.user.name)}`;

  /**
   * Renderiza el botón de pausa.
   * @returns El templateResult que contiene el botón de pausa.
   */
  protected renderPauseButton = (): TemplateResult => html`
    <mwc-icon-button
      icon="pause"
      slot="actionItems"
      @click=${() => this._tooglePause()}>
    </mwc-icon-button>`;

  /**
   * Renderiza el botón de salir.
   * @returns El templateResult que contiene el botón de salir.
   */
  protected renderExitButton = (): TemplateResult => html`
    <mwc-icon-button
      icon="arrow_forward_ios"
      slot="actionItems"
      @click=${() => this._exit()}>
    </mwc-icon-button>`;

  /**
   * Renderiza la información sobre el juego.
   * @returns El templateResult que contiene la información sobre el juego.
   */
  protected renderPoints = (): TemplateResult => html`
    <h3>Merged pull request: ${this.points}</h3>
    <h3>Auto Mergers: ${this.autoClickers}</h3>`;

  /**
   * Renderiza el botón para ganar puntos.
   * @returns El templateResult que contiene el botón.
   */
  protected renderMergeButton = (): TemplateResult => html`
    <mwc-button raised
      label="Merge"
      @click=${() => this._addPoint()}>
    </mwc-button>`;

  /**
   * Renderiza el botón para comprar autoclickers.
   * @returns El templateResult que contiene el botón.
   */
  protected renderBuyButton = (): TemplateResult => html`
    <mwc-button raised
      label="Buy auto merger (${this.autoClickerCost})"
      ?disabled=${this.isButtonDisabled()}
      @click=${() => this._addAutoclicker()}>
    </mwc-button>`;

}

window.customElements.define('wc-game-page', WcGamePageView);
