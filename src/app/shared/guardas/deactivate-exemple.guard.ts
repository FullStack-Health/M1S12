import { CanDeactivateFn } from '@angular/router';
import { CreateComponent } from '../../consulta/create/create.component';

export const deactivateExempleGuard: CanDeactivateFn<CreateComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.motivo.length == 0){
    return true;
  }else{
    if(confirm("tem certeza que quer sair da tela?")){
      return true;
    }

    return false;
  }
};
