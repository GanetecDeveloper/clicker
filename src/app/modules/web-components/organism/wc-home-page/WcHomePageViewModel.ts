import { LitElement, property } from 'lit-element';
import { EnterEvent, EnterEventDetail } from './event/EnterEvent';

export class WcHomePageViewModel extends LitElement {

  @property({ type: Boolean }) expandedData: boolean = false;

  name: string = "";

  _nameChanged(e: any): void {
    this.name = e.target.value;
  }

  protected _enterGame = (): void => {
    const newEvent = new EnterEvent("enterGame", {
      bubbles: true,
      composed: true,
      detail: new EnterEventDetail(this.name),
    });
    this.dispatchEvent(newEvent);
  }
}
