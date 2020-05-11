import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {
  @Input() loading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
