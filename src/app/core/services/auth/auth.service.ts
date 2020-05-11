import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserInterface } from 'src/app/models/user.model';
import { getUsers } from 'src/app/mocks/users';

import { StorageService } from '../database/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageService: StorageService) { }

  loggin({ email, password }: UserInterface): Observable<UserInterface> {
    return new Observable((observer) => {
      const allUsers = getUsers();
      const isValid = (user: UserInterface) => user.email === email && user.password === password;
      const loggedIn = allUsers.find((user: UserInterface) => isValid(user));

      setTimeout(() => {
        if (!loggedIn) {
          return observer.error(
            'Desculpe, não encontramos uma conta com esse endereço de Email e/ou senha.'
          );
        }

        return observer.next(loggedIn);
      }, 2000);
    });
  }

  isAuthenticated(): boolean {
    return this.localStorageService.getFromLocalStorage('userData') !== null
      ? true
      : false
  }
}
