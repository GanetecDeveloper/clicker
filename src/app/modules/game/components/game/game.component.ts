import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  username: string = "";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username') || "";
    if (!this.username) {
      this.router.navigate(['/']);
    }
  }

  exit(e: any) {
    this.router.navigate(['/']);
  }

}
