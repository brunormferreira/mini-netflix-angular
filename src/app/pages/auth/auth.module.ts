import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { AuthGuard } from 'src/app/core/guard/auth.guard';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [AuthComponent],
  providers: [AuthGuard],
})
export class AuthModule {}
