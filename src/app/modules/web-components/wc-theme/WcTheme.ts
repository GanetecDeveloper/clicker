import { themeColor } from './css/color.css';
import { CSSResultArray } from 'lit-element';
import { themeBase } from './css/base.css';
import { themeGlobalTypo } from './css/typo.css';
import { themeGlobalShadow } from './css/shadow.css';

/**
 * Web component que contiene todos los estilos de la aplicación.
 */
export class WcTheme {

    getStyles = (): CSSResultArray => [
        themeColor,
        themeBase,
        themeGlobalTypo,
        themeGlobalShadow
    ];

    /**
     * Inserta todos los estilos genéricos en el header de la aplicación para que estén disponibles
     * @returns void
     */
    loadHeadStyles = (): void => document.head.insertAdjacentHTML("beforeend", `<style> ${this.getStyles().toString()} </style>`);
}
