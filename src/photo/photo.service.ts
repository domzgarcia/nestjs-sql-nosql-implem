import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './dto/create-photo';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async delete(id): Promise<any> {
    try {
      const result = await this.photoRepository.delete(id);
      return result;
    } catch(e) {
      console.log(e.message);
    }
  }

  async findOne(id): Promise<any> {
    try {
      const result = await this.photoRepository.findOne(id);
      return result;
    } catch(e) {
      console.log(e.message);
    }
  }
  
  async updatePhoto(id, props): Promise<any> {
    try {
      const result = await this.photoRepository.update(id, {...props});
      return result;
    } catch(e) {
      console.log(e.message);
    }
  }

  async createPhoto(createPhotoDto: CreatePhotoDto): Promise<any> {
    try {
      const result = await this.photoRepository.save(createPhotoDto);
      return result;

    } catch(e) {
      console.log(e.message)
    }
  }
}
