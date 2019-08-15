import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { ApiController } from './api.controller'
import { AppService } from './app.service';
// import { PhotoModule } from './photo/photo.module';
import { CatsModule } from './cat/cats.module'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    CatsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
