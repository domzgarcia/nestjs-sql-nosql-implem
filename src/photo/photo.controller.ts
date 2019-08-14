import { Controller, Get, Post, Body, ValidationPipe, Res, HttpStatus, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './dto/create-photo';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async findAll (@Res() res) {
    const photos = await this.photoService.findAll();
    res.status(HttpStatus.OK).json(photos);
  }

  @Post('/create')
  async createPhoto (@Body() createPhotoDto: CreatePhotoDto) : Promise<any> {
    console.log('[boolean]', createPhotoDto.isPublished);
    const result = await this.photoService.createPhoto(createPhotoDto);
    console.log('[result]', result);
    return '#';
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const photo = await this.photoService.findOne(id)
    res.status(HttpStatus.OK).json(photo);
  }
  
  @Get('ab*cd')
  wildcard() {
    return 'This route uses a wildcard';
  }

  @Post('/update/:id')
  async updatePhoto(@Param('id') id, @Res() res, @Body() body) {
    const photo = await this.photoService.updatePhoto(id, body);
    res.status(HttpStatus.OK).json(photo);
  }

  @Get('delete/:id')
  async deletePhoto(@Param('id') id, @Res() res){
    const photo = await this.photoService.delete(id);
    res.status(HttpStatus.OK).json(photo);
  }
}
