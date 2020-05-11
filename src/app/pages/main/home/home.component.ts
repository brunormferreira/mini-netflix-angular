import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list: any = [];

  constructor(private moviesServices: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.moviesServices.getMoviesByCategory().subscribe(
      (res) => this.list = res
    );
  }
}
