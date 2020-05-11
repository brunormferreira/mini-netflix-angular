import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guard/auth.guard';

import { AuthComponent } from '../pages/auth/auth.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page not found!' },
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
