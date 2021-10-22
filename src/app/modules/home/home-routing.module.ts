import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

/**
 * Objeto router que contiene todas las rutas del módulo Home.
 */
const routes: Routes = [
    { path: '', component: HomeComponent },
];

/**
 * RoutingModule del módulo Home.
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
