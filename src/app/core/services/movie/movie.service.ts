import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MoviesByCategoriesInterface, CategoriesInterface } from 'src/app/models/categories.model';
import { getMovies } from 'src/app/mocks/movies';
import { getCategories } from 'src/app/mocks/categories';
import { MoviesInterface } from 'src/app/models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() { }

  getCategoriesAndMovies(): MoviesByCategoriesInterface[] {
    const allMovies: MoviesInterface[] = getMovies();
    const categories: CategoriesInterface[] = getCategories();

    const generatedData: MoviesByCategoriesInterface[] = categories.map(uniqueCategory => {
      const validate = (param: any) => param.categoryId === uniqueCategory.id
      const filteredList = allMovies.filter(data => validate(data))

      return { list: filteredList, ...uniqueCategory }
    });

    return generatedData;
  }

  getMoviesByCategory(): Observable<MoviesByCategoriesInterface[]> {
    return new Observable((observer) => {
      const data = this.getCategoriesAndMovies();

      return observer.next(data);
    })
  }

  getMetrics(): Observable<MoviesByCategoriesInterface[]> {
    return new Observable((observer) => {
      const categories = this.getCategoriesAndMovies();
      const movies = categories.map(uniqueCategory => {
        return { name: uniqueCategory.title, id: null, ...uniqueCategory }
      })

      return observer.next(movies)
    })
  }

  getMovieDetail(id: number): MoviesInterface {
    const allMovies: MoviesInterface[] = getMovies();
    return allMovies.find((movie) => movie.id === id);
  }
}
