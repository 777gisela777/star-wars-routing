import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { PersonajesComponent } from './personajes/personajes';
import { NavesComponent } from './naves/naves';
import { PlanetesComponent } from './planetes/planetes';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    },
    {
        path: 'naves',
        component: NavesComponent
    },
    {
        path: 'planetes',
        component: PlanetesComponent
    }
];
