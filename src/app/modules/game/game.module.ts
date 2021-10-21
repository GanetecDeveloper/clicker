import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { GameRoutingModule } from './game-routing.module';
import '../web-components/organism/wc-game-page/WcGamePageView'
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-top-app-bar-fixed';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GameModule { }
