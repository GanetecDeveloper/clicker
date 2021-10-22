import { LitElement, html, customElement, css, property } from 'lit-element';
import { assert, expect, fixture, oneEvent } from '@open-wc/testing';
import { WcHomePageView } from '../WcHomePageView';

describe('WcHomePageView Component', () => {
    let element: WcHomePageView;

    beforeEach(async () => {
        element = await fixture<WcHomePageView>(html`<wc-home-page></wc-home-page>`);
    });
});
