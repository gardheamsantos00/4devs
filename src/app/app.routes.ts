import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FormAvaliacaoComponent } from './form-avaliacao/form-avaliacao.component';
 
export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro-cliente', component: FormUsuarioComponent},
    {path: 'cadastro-avaliacao', component: FormAvaliacaoComponent}


]