import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://host.docker.internal:27017/test'),
    TypeOrmModule.forRoot(),
    CatsModule,
    UsersModule,


  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
