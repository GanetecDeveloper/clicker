import { User } from "../domain/User";

export class ExitEvent extends CustomEvent<ExitEventDetail> { }

export class ExitEventDetail {

  private _user: User;

  constructor(user: User) {
    this._user = user;
  }

  public get user(): User {
    return this._user;
  }

}
