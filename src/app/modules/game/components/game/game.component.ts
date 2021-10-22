import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Componente que actua como envoltorio del web componente del juego.
 */
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  /**
   * Nombre del usuario
   */
  username: string = "";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  /**
   * Evento onInit del ciclo de vida de angular en el que se recupera
   * el nombre de usuario recibido mediante paramMap del router.
   * En caso de no recibir este valor se devuelve a la vista de inicio.
   */
  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username') || "";
    if (!this.username) {
      this.router.navigate(['/']);
    }
  }

  /**
   * Evento de salida de la vista de juego. Redirecciona a la vista de inicio.
   */
  exit(): void {
    this.router.navigate(['/']);
  }

}
