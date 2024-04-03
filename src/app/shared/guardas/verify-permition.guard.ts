import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// o parametro childRoute é a rota filha que será ativada
// o parametro state é o estado da rota
export const verifyPermitionGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService); // Injeta o serviço de autenticação
  const router = inject(Router); // Injeta o serviço de roteamento

  if(authService.getPermition() === "doutor"){ // Verifica se o usuário tem permissão
    return true; // Permite a ativação da rota caso tenha a permissão de doutor
  }else{
    router.navigate(["home"]); // Redireciona para a rota home caso não tenha a permissão de doutor
    // Não permite a ativação da rota caso não tenha a permissão de doutor
    return false; //o retorno false é obrigatório mesmo que o redirecionamento seja feito
  }
};
