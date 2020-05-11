import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { MoviesByCategoriesInterface } from 'src/app/models/categories.model';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  topMovies: MoviesByCategoriesInterface[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.movieService.getMetrics().subscribe(
      (res) => {
        this.topMovies = res;
        this.topMovies.map(item => item.list.sort((a , b) => {
          return a.views > b.views
              ? 1
              : b.views > a.views
                ? -1
                : 0
        }).reverse()
      )}
    );
  }
}
