import { css, CSSResult, CSSResultArray } from 'lit-element';

/**
 * Estilos del componente GamePage
 */
export class GamePageTheme {

  /**
 * Estilos base del componente GamePage
 */
  static baseStyle: CSSResult = css`
    :host {
      display: grid;
      grid-template-rows: repeat(auto-fit, min-content);
      grid-template-columns: repeat(1, 1fr);
      gap: 0px;
      font-family: var(--theme-typo);
      color: var(--theme-color-on-primary);
      background-color: var(--theme-color-primary);
      width: 100vw;
      height: 100vh;
    }

    :host .wrapper > * {
      display: grid;
      align-items: center;
      justify-items: center;
      align-self: start;
    }

    mwc-button {
      --mdc-theme-primary: var(--theme-color-secondary);
      --mdc-theme-on-primary: var(--theme-color-on-secondary, #FFFFFF);
      --mdc-button-outline-color: var(--theme-color-secondary);
      margin: 10px;
    }

    mwc-top-app-bar-fixed{
      --mdc-theme-primary: var(--theme-color-primary);
    }

  `;

  static gamePageTheme: CSSResultArray = [
    GamePageTheme.baseStyle,
  ];
}
