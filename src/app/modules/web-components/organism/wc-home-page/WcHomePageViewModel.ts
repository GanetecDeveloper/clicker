import { LitElement, property } from 'lit-element';
import { EnterEvent, EnterEventDetail } from './event/EnterEvent';

/**
 * Lógica del web component HomePage
 */
export class WcHomePageViewModel extends LitElement {

  /**
   * Nombre de usuario.
   */
  name: string = "";

  /**
   * Evento ejecutado al escribir el nombre
   * de usuario que actualiza el dato almacenado.
   * @param e Evento
   */
  _nameChanged(e: any): void {
    this.name = e.target.value;
  }

  /**
   * Ejecuta el evento EnterGame al pulsar sobre el botón y envia el nombre de usuario.
   */
  protected _enterGame = (): void => {
    const newEvent = new EnterEvent("enterGame", {
      bubbles: true,
      composed: true,
      detail: new EnterEventDetail(this.name),
    });
    this.dispatchEvent(newEvent);
  }
}
