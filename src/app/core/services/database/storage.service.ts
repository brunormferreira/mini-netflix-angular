import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  saveToLocalStorage(param: string, r: any) {
    return window.localStorage.setItem(param, JSON.stringify(r));
  }

  getFromLocalStorage(param: string) {
    return window.localStorage.getItem(param);
  }

  getParsedDataFromLocalStorage(param: string) {
    return JSON.parse(this.getFromLocalStorage(param))
  }

  removeFromLocalStorage(param: string) {
    return window.localStorage.removeItem(param);
  }
}
