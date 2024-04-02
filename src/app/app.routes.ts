import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CreateComponent } from './consulta/create/create.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './shared/guardas/auth.guard';
import { DetailComponent } from './consulta/detail/detail.component';
import { verifyPermitionGuard } from './shared/guardas/verify-permition.guard';
import { deactivateExempleGuard } from './shared/guardas/deactivate-exemple.guard';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { 
        path: "home", 
        component: HomeComponent,
        canActivate: [authGuard]
    },
    { path: "login", component: LoginComponent},
    { path: "consulta", 
        canActivateChild: [verifyPermitionGuard],
        children:[
            { path: "create", component: CreateComponent, canDeactivate: [deactivateExempleGuard] },
            { path: "detail/:id", component: DetailComponent},
        ]
    }
];
