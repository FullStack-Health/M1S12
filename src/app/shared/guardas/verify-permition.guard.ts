import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const verifyPermitionGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let permitionType = authService.getPermition();

  if(permitionType === "doutor"){
    return true;
  }else{
    router.navigate(["home"]);
    return false;
  }
};
