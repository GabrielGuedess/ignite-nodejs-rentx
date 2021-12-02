import { inject, injectable } from 'tsyringe';

import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarsImagesRepository';

interface IRequest {
  car_id: string;
  images_names: string[];
}

@injectable()
export class UploadCarImagesUseCase {
  constructor(
    @inject('CarsImageRepository')
    private carsImageRepository: CarsImagesRepository,
  ) {}

  async execute({ car_id, images_names }: IRequest): Promise<void> {
    images_names.map(async image => {
      await this.carsImageRepository.create(car_id, image);
    });
  }
}
