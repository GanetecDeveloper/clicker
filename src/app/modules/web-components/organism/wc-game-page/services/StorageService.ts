import { User } from "../domain/User";

/**
 * Servicio de almacenamiento en localStorage.
 */
export class StorageService {

    /**
     * Alacena un objeto.
     * @param key clave del objeto a almacenar.
     * @param value Objeto a almacenar.
     */
    public setItem = (key: string, value: User): void => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Recupera un objeto almacenado.
     * @param key Clave del objeto a recuperar.
     * @returns Objeto encontrado o undefineden caso de que no exista.
     */
    public getItem = (key: string): User | undefined => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    }

    /**
     * Elimina un objeto almacenado a partir de su clave.
     * @param key Clave del objeto a eliminar.
     */
    public removeItem = (key: string): void => {
        localStorage.removeItem(key);
    }

    /**
     * Borra todos los registros almacenados.
     */
    public clear = (): void => {
        localStorage.clear();
    }
}
