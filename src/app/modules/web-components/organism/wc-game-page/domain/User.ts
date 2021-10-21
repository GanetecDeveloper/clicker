export class User implements IUser {

    name: string = "";
    autoClickerCost: number = 10;
    autoClickerBaseCost: number = 10;
    autoClickerTime: number = 100;

    constructor(user: IUser) {
        Object.assign(this, user);
        this.autoClickerCost = this.autoClickerBaseCost;
    }

    getNextAutoclickerCost = (autoClickers: number) => {
        this.autoClickerCost = this.autoClickerBaseCost + this.autoClickerBaseCost * autoClickers;
        return this.autoClickerCost;
    }

}

export interface IUser {
    name: string;
    autoClickerCost?: number;
    autoClickerBaseCost: number;
    autoClickerTime: number;
}
