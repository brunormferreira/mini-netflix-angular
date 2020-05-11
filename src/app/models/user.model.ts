import { MoviesInterface } from './movies.model';

interface UserInterface {
  id?: number
  name?: string
  email: string
  password: string
  profileImg?: string
  favMovies?: MoviesInterface[]
}

export {
  UserInterface,
}
