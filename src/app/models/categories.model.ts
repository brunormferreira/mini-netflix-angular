import { MoviesInterface } from "./movies.model";

interface CategoriesInterface {
  id: number
  title: string
}

interface MoviesByCategoriesInterface extends CategoriesInterface {
  list: MoviesInterface[]
}

export {
  CategoriesInterface,
  MoviesByCategoriesInterface,
}
