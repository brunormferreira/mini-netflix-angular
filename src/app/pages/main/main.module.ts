import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from 'src/app/routing/main-routing.module';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { MetricsComponent } from 'src/app/pages/main/metrics/metrics.component';
import { ProfileComponent } from 'src/app/pages/main/profile/profile.component';
import { PlayMovieComponent } from './play-movie/play-movie.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MetricsComponent,
    ProfileComponent,
    PlayMovieComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
