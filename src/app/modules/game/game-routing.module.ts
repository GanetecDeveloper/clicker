import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';

/**
 * Objeto router que contiene todas las rutas del módulo Gaming.
 */
const routes: Routes = [
    { path: '', component: GameComponent },
];

/**
 * RoutingModule del módulo Gaming.
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GameRoutingModule { }
