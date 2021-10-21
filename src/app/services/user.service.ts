import { Injectable } from '@angular/core';
import { UserProfile } from '../models/UserProfile';
import { User } from '../modules/web-components/organism/wc-game-page/domain/User';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(storageService: StorageService) { }

    getUser(name: string): User {
        // this.storageService.
        return new User({
            name: "FranII",
            autoClickerBaseCost: 10,
            autoClickerTime: 100
        });
        // return this.users.filter(user: UserProfile => user.name === name);
    }

    save(name: string, points: number, autoClickers: number) {
        alert("SAVED " + name);
    }
}
