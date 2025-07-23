import { Routes } from '@angular/router';
import { Inserimento } from './components/inserimento/inserimento';
import { Lista } from './components/lista/lista';

export const routes: Routes = [
    {path: "", redirectTo: "lista", pathMatch: "full"},
    {path: "inserisci", component: Inserimento},
    {path: "lista", component: Lista},
];
