import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente que actua como envoltorio del web componente de inicio de la aplicación.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private router: Router) { }

  /**
   * Evento de entrada a la vista de juego. Redirecciona a
   * la vista de juego pasando el nombre del usuario.
   */
  enter(e: any): void {
    this.router.navigate(['/game', e.detail.name]);
  }
}
