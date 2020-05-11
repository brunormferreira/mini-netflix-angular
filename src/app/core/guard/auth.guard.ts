import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { StorageService } from '../services/database/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: StorageService,
  ) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userValue = this.localStorageService.getFromLocalStorage('userData');
    const urlIncludes = state.url.includes('auth');

    const hasUserValue = userValue;
    const hasNoUserValue = !userValue;

    const isAuth = hasNoUserValue && urlIncludes;
    const isNoAuth = hasUserValue && urlIncludes;

    const navigateTo = (param: string) => this.router.navigate([param]);

    const validate = () => {
      let isValid;
      if (hasUserValue) {
        isValid = true;

        return isValid
      } if (isNoAuth) {
        navigateTo('')
        isValid = false;

        return isValid;
      } else if (isAuth) {
        isValid = true;

        return isValid;
      } else {
        navigateTo('auth')
        isValid = false;

        return isValid;
      }
    }

    return validate()
  }
}
