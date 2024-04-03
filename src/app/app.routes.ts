import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './shared/guardas/auth.guard';
import { verifyPermitionGuard } from './shared/guardas/verify-permition.guard';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { 
        path: "home", 
        component: HomeComponent,
        canActivate: [authGuard] // Guarda de rota do tipo CanActivate
    },
    { path: "login", component: LoginComponent},
    { 
        path: "consulta", 
        canActivateChild: [verifyPermitionGuard], // Guarda de rota filha do tipo CanActivateChild
        loadChildren: // Carrega o módulo de consulta
            ()=> import('./consulta/consulta.module').then( m => m.ConsultaModule) // Função que retorna uma Promise
    },
];
