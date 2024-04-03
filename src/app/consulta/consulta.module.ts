import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { deactivateExempleGuard } from '../shared/guardas/deactivate-exemple.guard';
import { DetailComponent } from './detail/detail.component';
import { ConsultaComponent } from './consulta.component';

// O módulo de consulta foi criado para organizar as rotas relacionadas a consulta
// e aplicar também o lazy loading para carregar as rotas de consulta apenas quando necessário
const consultaRoutes: Routes = [
    { path: "", component: ConsultaComponent},
    { 
      path: "create", 
      component: CreateComponent, 
      canDeactivate: [deactivateExempleGuard] // Guarda de rota do tipo CanDeactivate
    },
    { path: "detail/:id", component: DetailComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(consultaRoutes) // Importa as rotas de consulta para ser reconhecida pelo módulo de consulta
  ]
})
export class ConsultaModule { }
