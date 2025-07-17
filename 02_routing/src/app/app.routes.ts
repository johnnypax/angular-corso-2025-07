import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Servizi } from './servizi/servizi';
import { ChiSiamo } from './chi-siamo/chi-siamo';
import { Contatti } from './contatti/contatti';

export const routes: Routes = [
    { path: "" , redirectTo: "home", pathMatch: "full" },
    { path: "home", component: Home },
    { path: "servizi", component: Servizi },
    { path: "chi-siamo", component: ChiSiamo },
    { path: "contatti", component: Contatti },
];
