import { LitElement, property, state } from 'lit-element';
import { User } from './domain/User';
import { ExitEvent, ExitEventDetail } from './event/ExitEvent';
import { UserService } from './services/UserService';

/**
 * Lógica del web component GamePage
 */
export class WcGamePageViewModel extends LitElement {

  private _username: string = "";

  set username(username: string) {
    this._username = username;
    this.loadUser();
  }

  /**
   * Nombre de usuario
   */
  @property({ type: String })
  get username(): string {
    return this._username;
  }

  /**
   * Datos del usuario
   */
  @state() user!: User;

  /**
   * Puntuación actual
   */
  @state() points: number = 0;

  /**
   * Número de autoclickers comprados.
   */
  @state() autoClickers: number = 0;

  /**
   * Precio del autoclicker actual.
   */
  @state() autoClickerCost: number = 0;

  private timer: ReturnType<typeof setTimeout> | undefined;

  private _userService: UserService;

  constructor() {
    super();
    this._userService = new UserService();
    window.addEventListener("beforeunload", () => this.saveUser());
  }

  /**
   * Evento ejecutado al pulsar el botón para conseguir un punto más.
   */
  protected _addPoint = (): void => {
    this.setTimer();
    this.points++;
  }

  /**
   * Evento ejecutado al pulsar el botón para comprar un autoclicker.
   */
  protected _addAutoclicker = (): void => {
    this.setTimer();
    this.points -= this.user.autoClickerCost;
    this.autoClickers++;
    this.autoClickerCost = this.user.getNextAutoclickerCost(this.autoClickers);
  }

  /**
   * Evento ejecutado al pulsar el botón de pausa que paraliza el juego.
   */
  protected _tooglePause = (): void => {
    this.timer ? this.clearTimer() : this.setTimer();
  }

  /**
   * Evento ejecutado al pulsar el botón para salir del juego.
   */
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

  /**
   * Comprueba si el botón de compra debe estar deshabilitado.
   * @returns boolean
   */
  protected isButtonDisabled = (): boolean => this.points < this.user.autoClickerCost;

  /**
   * Comprueba si el botón de compra debe estar visible.
   * @returns boolean
   */
  protected isButtonVisible = (): boolean => this.autoClickers > 0 || !this.isButtonDisabled();

  private setTimer = (): void => {
    this.clearTimer();
    this.timer = setInterval((): void => { this.points += this.autoClickers }, this.user.autoClickerTime);
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
        this.autoClickerCost = this.user.getNextAutoclickerCost(this.autoClickers);
        if (this.autoClickers > 0) {
          this.setTimer();
        }
      })
      .catch((error: Error) => {
        console.error(`Error => ${error}`);
      });
  }

  private saveUser = (): void => {
    this.user.points = this.points;
    this.user.autoClickers = this.autoClickers;
    this._userService.saveUser(this.user);
  }

}
