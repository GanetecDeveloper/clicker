import { User } from "../domain/User";

/**
 * Evento personalizadao de salida.
 */
export class ExitEvent extends CustomEvent<ExitEventDetail> { }

/**
 * Clase que contiene los detalles del evento de salida.
 */
export class ExitEventDetail {

  private _user: User;

  constructor(user: User) {
    this._user = user;
  }

  public get user(): User {
    return this._user;
  }

}
