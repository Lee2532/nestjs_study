import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    TypeOrmModule.forRoot(),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
