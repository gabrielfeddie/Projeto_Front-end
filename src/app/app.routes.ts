import { Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HomeComponent } from './home/home.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

export const routes: Routes = [
    {path: 'login', component: TelaLoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'relatorios', component: RelatoriosComponent}
];