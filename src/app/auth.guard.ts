// auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { Injectable,inject } from '@angular/core';
import { AuthService } from './authService/auth.service';

Injectable({ providedIn: 'root' })
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.userData.getValue()!=null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};