import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesInterface } from 'src/app/models/movies.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: MoviesInterface;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  playVideo() {
    this.router.navigate([`/play-movies/${this.movie.id}`]);
  }
}
