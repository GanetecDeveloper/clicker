import { css, CSSResult, CSSResultArray } from 'lit-element';

export class HomePageTheme {
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

    :host .wrapper  > * {
      display: grid;
      align-items: center;
      justify-items: center;
      align-self: start;
    }

    .lock {
      color: var(--theme-color-on-primary);
      --mdc-icon-size: 64px;
    }

    mwc-button {
      --mdc-theme-primary: var(--theme-color-secondary);
      --mdc-theme-on-primary: var(--theme-color-on-secondary, #FFFFFF);
      --mdc-button-outline-color: var(--theme-color-secondary);
      margin: 10px;
    }

    mwc-textfield {
      --mdc-theme-primary: var(--theme-color-secondary);
      max-width: 250px;
      margin: 10px;
    }

  `;

  static homePageTheme: CSSResultArray = [
    HomePageTheme.baseStyle,
  ];
}
