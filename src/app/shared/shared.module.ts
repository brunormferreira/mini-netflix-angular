import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { PinnedBarComponent } from './pinned-bar/pinned-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { MovieComponent } from './movie/movie.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PageLoaderComponent,
    PinnedBarComponent,
    NavbarComponent,
    BannerComponent,
    MovieComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PageNotFoundComponent,
    PageLoaderComponent,
    PinnedBarComponent,
    NavbarComponent,
    BannerComponent,
    MovieComponent,
    ListComponent,
  ]
})
export class SharedModule { }
