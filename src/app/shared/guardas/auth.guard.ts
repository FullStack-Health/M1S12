import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// o parametro route é a rota que será ativada
// o parametro state é o estado da rota
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injeta o serviço de autenticação
  const router = inject(Router); // Injeta o serviço de roteamento

  if(authService.isLogged){ // Verifica se o usuário está logado
    return true;
  }else{
    router.navigate(["login"]); // Redireciona para a rota login caso não esteja logado
    return false;
  }
};
