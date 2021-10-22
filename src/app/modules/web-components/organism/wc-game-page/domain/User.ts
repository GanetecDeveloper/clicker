/**
 * Clase usuario
 */
export class User implements IUser {

    /**
     * Nombre del usuario
     */
    name: string = "";

    /**
     * Precio del último autoclicker comprado.
     */
    autoClickerCost: number = 10;

    /**
     * Precio de un autoclicker.
     */
    autoClickerBaseCost: number = 10;

    /**
     *Tiempo que pasa entre cada ejecución de los autoclickers.
     */
    autoClickerTime: number = 100;

    /**
     * Número de puntos de que dispone el usuario.
     */
    points: number = 0;

    /**
     * Numero de autoClickers comprados por el usuario.
     */
    autoClickers: number = 0;

    constructor(user: IUser) {
        Object.assign(this, user);
        this.autoClickerCost = this.autoClickerBaseCost;
    }

    /**
     *
     * @param autoClickers Número de autoclicker que tiene el usuario
     * @returns Precio del próximo autoclicker.
     */
    getNextAutoclickerCost = (autoClickers: number): number => {
        this.autoClickerCost = this.autoClickerBaseCost + this.autoClickerBaseCost * autoClickers;
        return this.autoClickerCost;
    }

}

/**
 * Modelo de datos del usuario
 */
export interface IUser {

    /**
     * Nombre del usuario
     */
    name: string;

    /**
     * Precio del último autoclicker comprado.
     */
    autoClickerCost?: number;

    /**
     * Precio de un autoclicker.
     */
    autoClickerBaseCost: number;

    /**
     *Tiempo que pasa entre cada ejecución de los autoclickers.
     */
    autoClickerTime: number;

    /**
     * Número de puntos de que dispone el usuario.
     */
    points?: number;

    /**
     * Numero de autoClickers comprados por el usuario.
     */
    autoClickers?: number;
}
