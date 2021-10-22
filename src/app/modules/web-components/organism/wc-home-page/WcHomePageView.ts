import { html, TemplateResult } from 'lit-html';
import { HomePageTheme } from './css/home-page.css';
import { CSSResultArray } from 'lit-element';
import { WcHomePageViewModel } from './WcHomePageViewModel';

/**
 * Vista del web component HomePage.
 */
export class WcHomePageView extends WcHomePageViewModel {
  static getStyles = (): CSSResultArray => [HomePageTheme.homePageTheme];

  /**
   * Render principal del componente.
   * @returns El templateResult que contiene
   * las llamadas a los demás renders.
   */
  protected render = (): TemplateResult => html`
    <div class="wrapper">
      ${this.renderIcon()}
      ${this.renderHeader()}
      ${this.renderInputUsername()}
      ${this.renderButton()}
    </div>`;

  /**
   * Renderiza el icono.
   * @returns El templateResult que contiene el icono.
   */
  protected renderIcon = (): TemplateResult => html`
    <mwc-icon class="lock">lock</mwc-icon>`;

  /**
   * Renderiza el titulo.
   * @returns El templateResult que contiene el titulo
   */
  protected renderHeader = (): TemplateResult => html`
    <h1>Create new player</h1>`;

  /**
   * Renderiza el campo para escribir el nombre de usuario.
   * @returns El templateResult que contiene el campo para el nombre de usuario.
   */
  protected renderInputUsername = (): TemplateResult => html`
    <mwc-textfield
      id="Name"
      name="Name"
      value="${this.name}"
      label='Name'
      required
      .autoValidate=${true}
      validationMessage="Please, write a valid username"
      @input=${(e: InputEvent) => this._nameChanged(e)}>
    </mwc-textfield>`;

  /**
   * Renderiza el boton de acceso al juego.
   * @returns El templateResult que contiene el botón de acceso al juego
   */
  protected renderButton = (): TemplateResult => html`
    <mwc-button raised label="Join"
      @click=${() => this._enterGame()}>
    </mwc-button>`;

}

window.customElements.define('wc-home-page', WcHomePageView);
