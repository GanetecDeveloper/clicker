import { User } from "../domain/User";

export class StorageService {

    public setItem = (key: string, value: User): void => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public getItem = (key: string): User | undefined => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    }

    public removeItem = (key: string): void => localStorage.removeItem(key);

    public clear = (): void => localStorage.clear();
}
