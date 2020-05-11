import { Component, OnInit, Input } from '@angular/core';
import { MoviesInterface } from 'src/app/models/movies.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() movies: MoviesInterface[];

  constructor() { }

  ngOnInit(): void {
  }

}
