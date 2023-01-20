import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: any;

  constructor() {
    this.storage = localStorage;
  }

  // Funcion para recuperar los datos del storage
  public retrieve(key: string): any {
    const item = this.storage.getItem(key);

    if (item && item !== 'undefined') {
      return JSON.parse(item)
    }

    return;
  }
  // Para guardar los datos del session storage
  public store(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
