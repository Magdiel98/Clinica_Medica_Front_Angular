import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Agendar } from './components/agendar/agendar';
import { Cadastromedico } from './components/cadastromedico/cadastromedico';
import { Cadastropaciente } from './components/cadastropaciente/cadastropaciente';
import { Consulta } from './components/consulta/consulta';
import { Corpo } from './components/corpo/corpo';
import { Faleconosco } from './components/faleconosco/faleconosco';


export const routes: Routes = [
    {path:'', component: Home},
    {path:'agendar', component: Agendar},
    {path:'cadastromedico', component: Cadastromedico},
    {path: 'cadastropaciente', component: Cadastropaciente},
    {path: 'consulta', component: Consulta},
    {path: 'corpo', component: Corpo},
    {path: 'faleconosco', component: Faleconosco},
];
