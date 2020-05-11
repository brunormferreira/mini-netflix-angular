import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.scss']
})
export class PlayMovieComponent implements OnInit {
  movieDetail: any = [];

  constructor(
    private moviesServive: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.loadMovieDetail(+id);
  }

  loadMovieDetail(id: number) {
    this.movieDetail = this.moviesServive.getMovieDetail(id);
  }
}
