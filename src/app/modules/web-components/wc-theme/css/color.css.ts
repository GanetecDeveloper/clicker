import { css, CSSResult } from "lit-element";

export const themeColor: CSSResult = css`
  body{
    --theme-color-primary: #004481; /* 800*/
    --theme-color-primary-variant: #4EB741;
    --theme-color-primary-light: #9AD4A8; /* 200 */
    --theme-color-primary-dark: #005A1F; /* 900 */
    --theme-color-secondary: #028484;
    --theme-color-secondary-variant: #333333;
    --theme-color-secondary-light: #5C5C5C;
    --theme-color-secondary-dark: #0C0C0C;
    --theme-color-background: #FFFFFF;
    --theme-color-surface: #FFFFFF;
    --theme-color-error: #C51162;
    --theme-color-on-primary: #FFFFFF;
    --theme-color-on-secondary: #FFFFFF;
    --theme-color-on-background: #1d2e24;
    --theme-color-on-surface: #007932;
    --theme-color-on-error: #FFFFFF;
  }
`;
