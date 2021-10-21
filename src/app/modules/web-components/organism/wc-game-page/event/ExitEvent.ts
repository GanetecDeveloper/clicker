import { User } from "../domain/User";

export class ExitEvent extends CustomEvent<ExitEventDetail> { }

export class ExitEventDetail {

  private _user: User;
  private _points: number;
  private _autoClickers: number;

  constructor(user: User, points: number, autoclickers: number) {
    this._user = user;
    this._points = points;
    this._autoClickers = autoclickers;
  }

  public get user(): User {
    return this._user;
  }

  public get points(): number {
    return this._points;
  }

  public get autoclickers(): number {
    return this._autoClickers;
  }

}
