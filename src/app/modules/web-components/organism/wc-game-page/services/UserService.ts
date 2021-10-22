import { User } from '../domain/User';
import { StorageService } from './StorageService';

/**
 * Servicio de gestión de los datos de usuario.
 */
export class UserService {

    private _storageService: StorageService = new StorageService();

    /**
     * Almacena los datos de un usuario
     * @param user usuario a almacenar
     * @returns objeto Promise que devolverá el usuario guardado.
     */
    public saveUser = async (user: User): Promise<User> => {
        return new Promise((resolve) => {
            this._storageService.setItem(user.name, user);
            resolve(user);
        });
    };

    /**
     * Obtiene un usario existente o crea uno nuevo si este no existiera.
     * @param username usuario a recuperar
     * @returns objeto Promise que devolverá el usuario seleccionado o un nuevo perfil de
     * usuario en caso de que aún no estuviera creado este.
     */
    public getUser = async (username: string): Promise<User> => {
        return new Promise((resolve) => {
            const user = this._storageService.getItem(username);
            console.log("USUARIO CARGADO", user, username);
            return user ? resolve(user) : resolve(this.getNewUser(username));
        });
    };

    /**
     * Obtiene un usario nuevo
     * @param username Nombre del nuevo usuario
     * @returns Usuario creado con los valores por defecto
     */
    public getNewUser = (username: string): User => new User({
        name: username || "",
        autoClickerCost: 10,
        autoClickerBaseCost: 10,
        autoClickerTime: 100,
        points: 0,
        autoClickers: 0,
    });
}
