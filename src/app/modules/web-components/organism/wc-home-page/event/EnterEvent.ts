export class EnterEvent extends CustomEvent<EnterEventDetail> { }

export class EnterEventDetail {

  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

}
