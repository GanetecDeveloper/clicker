import { themeColor } from './css/color.css';
import { CSSResultArray } from 'lit-element';
import { themeBase } from './css/base.css';
import { themeGlobalTypo } from './css/typo.css';
import { themeGlobalShadow } from './css/shadow.css';

export class WcTheme {

    getStyles = (): CSSResultArray => [
        themeColor,
        themeBase,
        themeGlobalTypo,
        themeGlobalShadow
    ];

    loadHeadStyles = (): void => document.head.insertAdjacentHTML("beforeend", `<style> ${this.getStyles().toString()} </style>`);
}
