import { LitElement, property, state } from 'lit-element';
import { User } from './domain/User';
import { ExitEvent, ExitEventDetail } from './event/ExitEvent';

export class WcGamePageViewModel extends LitElement {

  @property({ type: Object }) user!: User;

  @state() points: number = 0;

  @state() autoClickers: number = 0;

  @state() autoClickerCost: number = 0;

  private timer: ReturnType<typeof setTimeout> | undefined;

  protected _addPoint = (): void => {
    this.setTimer();
    this.points++
  }

  protected _addAutoclicker = (): void => {
    this.setTimer();
    this.points -= this.user.autoClickerCost;
    this.autoClickers++;
    this.user.getNextAutoclickerCost(this.autoClickers);
  }

  protected _tooglePause = (): void => {
    this.timer ? this.clearTimer() : this.setTimer();
  }

  protected _exit = (): void => {
    this.clearTimer();
    const newEvent = new ExitEvent('exitGame', {
      bubbles: true,
      composed: true,
      detail: new ExitEventDetail(this.user, this.points, this.autoClickers),
    });
    this.dispatchEvent(newEvent);
  }

  protected isButtonDisabled = (): boolean => this.points < this.user.autoClickerCost;

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

}
