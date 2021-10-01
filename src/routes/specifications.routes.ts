import { Router } from 'express';

import { createSpecificationsController } from '../modules/cars/useCases/createSpecification';

export const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationsController.handle(request, response);
});
