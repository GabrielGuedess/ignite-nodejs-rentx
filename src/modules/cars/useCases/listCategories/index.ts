import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCatogoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);
