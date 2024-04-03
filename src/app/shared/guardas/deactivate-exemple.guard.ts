import { CanDeactivateFn } from '@angular/router';
import { CreateComponent } from '../../consulta/create/create.component';

// o parametro component é o componente que será desativado
// o parametro currentRoute é a rota atual
// o parametro currentState é o estado atual da rota
// o parametro nextState é o estado da próxima rota
export const deactivateExempleGuard: CanDeactivateFn<CreateComponent> = (component, currentRoute, currentState, nextState) => {
  //o tipo da variável deactivateExempleGuard é por padrão vem como CanDeactivateFn<unknown>,
  //por isso é necessário especificar o tipo do componente que será desativado, no caso CreateComponent

  if(component.consultaForm.pristine){ // Verifica se o formulário não foi alterado em nenhum campo
    return true;
  }else{
    if(confirm("tem certeza que quer sair da tela?")){ // Pergunta se o usuário tem certeza que quer sair da tela
      return true;
    }
    // Não permite a desativação da rota caso o usuário não tenha certeza que quer sair da tela
    return false;
  }
};
