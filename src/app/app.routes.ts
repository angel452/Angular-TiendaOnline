import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {path: '', component: ListaProductosComponent},
    {path: 'listado', component: ListaProductosComponent},
    {path: 'agregar', component: FormularioComponent},
    {path: 'editar/:id', component: FormularioComponent},
];