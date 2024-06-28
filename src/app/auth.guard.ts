import { inject } from '@angular/core';
import { CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state: RouterStateSnapshot) => {
  return inject(AuthService).checkLogin(state.url)
  // return true;
};
