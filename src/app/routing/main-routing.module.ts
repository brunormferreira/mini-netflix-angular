import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../pages/main/main.component';
import { HomeComponent } from '../pages/main/home/home.component';
import { MetricsComponent } from '../pages/main/metrics/metrics.component';
import { ProfileComponent } from '../pages/main/profile/profile.component';
import { PlayMovieComponent } from '../pages/main/play-movie/play-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'metrics',
        component: MetricsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'play-movies/:id',
        component: PlayMovieComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
