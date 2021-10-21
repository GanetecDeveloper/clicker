import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modules/web-components/organism/wc-game-page/domain/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  username: string = "";
  user!: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username') || "";
    if (this.username) {
      this.user = this.userService.getUser(this.username);
    } else {
      this.router.navigate(['/']);
    }
  }

  exit(e: any) {
    this.userService.save(e.detail.user.name, e.detail.points, e.detail.autoClickers);
    this.router.navigate(['/']);
  }

}
