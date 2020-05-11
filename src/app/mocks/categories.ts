import { CategoriesInterface } from '../models/categories.model';

const categories: CategoriesInterface[] = [
  { id: 1, title: 'Ação', },
  { id: 2, title: 'Comédia', },
  { id: 3, title: 'Terror', },
  { id: 4, title: 'Romance', },
]

const getCategories = (): CategoriesInterface[] => [...categories];

export {
  getCategories
}

