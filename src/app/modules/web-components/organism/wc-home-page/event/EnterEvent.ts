/**
 * Evento personalizadao de entrada.
 */
export class EnterEvent extends CustomEvent<EnterEventDetail> { }

/**
 * Clase que contiene los detalles del evento de entrada.
 */
export class EnterEventDetail {

  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

}
