import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './pages/auth/auth.module';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './pages/main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
