import { css, CSSResult } from "lit-element";

/**
 * Estilos base para el tema de la aplicación.
 */
export const themeBase: CSSResult = css`
  h1 {
    font: normal normal bold 24px/28px var(--theme-typo, "Noto Sans HK");
    color: #333333;
  }

  h2, h3, h4, h5 {
    font: var(--theme-typo, normal normal bold 18px/24px "Noto Sans HK");
  }

  p, a {
    font: var(--theme-typo, normal normal bold 14px/24px "Noto Sans HK");
  }
`;
