import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { WcTheme } from './modules/web-components/wc-theme/WcTheme';
import { StorageService } from './services/storage.service';
new WcTheme().loadHeadStyles();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    UserService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
