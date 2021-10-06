import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    TypeOrmModule.forRoot(),
    CatsModule,
  ],
})
export class AppModule {}
