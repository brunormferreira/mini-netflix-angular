import { Component, OnInit } from '@angular/core';

import { StorageService } from 'src/app/core/services/database/storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData: any = {};

  constructor(private localStorageService: StorageService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    const user = this.localStorageService.getParsedDataFromLocalStorage('userData')
    this.profileData = user;
  }
}
