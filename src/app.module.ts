import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { UserController } from './user/user.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    TypeOrmModule.forRoot(),
    CatsModule,
  ],
  controllers: [UserController],
})
export class AppModule {}
