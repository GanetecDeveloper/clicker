import { User } from '../domain/User';
import { StorageService } from './StorageService';

export class UserService {

    _storageService: StorageService = new StorageService();

    public saveUser = async (user: User): Promise<User> => {
        return new Promise((resolve) => {
            this._storageService.setItem(user.name, user);
            resolve(user);
        });
    };

    public getUser = async (username: string): Promise<User> => {
        return new Promise((resolve) => {
            const user = this._storageService.getItem(username);
            console.log("USUARIO CARGADO", user, username);
            return user ? resolve(user) : resolve(this.getNewUser(username));
        });
    };

    public getNewUser = (username: string): User => new User({
        name: username || "",
        autoClickerCost: 10,
        autoClickerBaseCost: 10,
        autoClickerTime: 100,
        points: 0,
        autoClickers: 0,
    });
}
