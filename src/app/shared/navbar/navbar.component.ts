import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/core/services/database/storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private localStorageService: StorageService,
  ) {  }

  ngOnInit(): void {}

  logoutUser() {
    this.router.navigate(['auth']);
    this.localStorageService.removeFromLocalStorage('userData');
  }
}
