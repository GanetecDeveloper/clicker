import { LitElement, property, state } from 'lit-element';
import { User } from './domain/User';
import { ExitEvent, ExitEventDetail } from './event/ExitEvent';
import { UserService } from './services/UserService';

export class WcGamePageViewModel extends LitElement {

  private _username: string = "";

  set username(username: string) {
    this._username = username;
    this.loadUser();
  }

  @property({ type: String })
  get username(): string {
    return this._username;
  }

  @state() user!: User;

  @state() points: number = 0;

  @state() autoClickers: number = 0;

  @state() autoClickerCost: number = 0;

  private timer: ReturnType<typeof setTimeout> | undefined;

  private _userService: UserService;

  constructor() {
    super();
    this._userService = new UserService();
    window.addEventListener("beforeunload", () => this.saveUser());
  }

  protected _addPoint = (): void => {
    this.setTimer();
    this.points++;
  }

  protected _addAutoclicker = (): void => {
    this.setTimer();
    this.points -= this.user!.autoClickerCost;
    this.autoClickers++;
    this.autoClickerCost = this.user!.getNextAutoclickerCost(this.autoClickers);
  }

  protected _tooglePause = (): void => {
    this.timer ? this.clearTimer() : this.setTimer();
  }

  protected _exit = (): void => {
    this.clearTimer();
    this.saveUser();
    const newEvent = new ExitEvent('exitGame', {
      bubbles: true,
      composed: true,
      detail: new ExitEventDetail(this.user),
    });
    this.dispatchEvent(newEvent);
  }

  protected isButtonDisabled = (): boolean => this.points < this.user!.autoClickerCost;

  protected isButtonVisible = (): boolean => this.autoClickers > 0 || !this.isButtonDisabled();

  private setTimer = (): void => {
    this.clearTimer();
    this.timer = setInterval((): void => { this.points += this.autoClickers }, this.user!.autoClickerTime);
  }

  private clearTimer = (): void => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }

  private loadUser = (): void => {
    this._userService.getUser(this.username)
      .then((user: User) => {
        this.user = new User({ ...user });
        this.points = this.user.points;
        this.autoClickers = this.user.autoClickers;
        this.autoClickerCost = this.user.autoClickerCost;
        if (this.autoClickers > 0) {
          this.setTimer();
        }
      })
      .catch((error: any) => {
        console.error(`Error => ${error}`);
      });
  }

  private saveUser = (): void => {
    this.user.points = this.points;
    this.user.autoClickers = this.autoClickers;
    this._userService.saveUser(this.user);
  }

}
