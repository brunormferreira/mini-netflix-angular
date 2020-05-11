import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserInterface } from 'src/app/models/user.model';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { StorageService } from 'src/app/core/services/database/storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  submittedForm: boolean = false;
  errorUser: boolean = false;
  loading: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });

    this.loading = false;

    this.loginForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  get f() {
    return this.loginForm.controls;
  }

  getErrors(name: string) {
    return this.submittedForm
      && this.loginForm.get(name).errors
      && this.loginForm.get(name).touched;
  }

  onSubmit() {
    this.submittedForm = true;

    if (this.loginForm.invalid) return

    const formValues: UserInterface = {
      email: this.f.email.value,
      password: this.f.password.value,
    };

    this.loading = true;
    this.authService.loggin(formValues).subscribe(
      r => {
        this.loading = false;
        this.localStorageService.saveToLocalStorage('userData', r)
        this.router.navigateByUrl('/');
      },
      err => {
        this.loading = false;
        this.errorUser = true;
        throw new Error(err);
      }
    )
    this.loginForm.reset();
  }
}
