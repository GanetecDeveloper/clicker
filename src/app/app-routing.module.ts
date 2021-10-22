import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then(
        (mod) => mod.HomeModule
      ),
  },
  {
    path: 'game/:username',
    loadChildren: () =>
      import('./modules/game/game.module').then(
        (mod) => mod.GameModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
