import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import morgan from 'morgan'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const appOptions = {
    cors:{
      origin : [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:3001',
        'host.docker.internal:3001',
        'host.docker.internal:3000'
      ]
    }
  }

  const app = await NestFactory.create<NestExpressApplication>(AppModule, appOptions);
  
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  let logger = require('morgan');

  app.use(logger('combined'))

  const config = new DocumentBuilder()
    .setTitle('Swagger API')
    .setDescription('Swagger API description')
    .setVersion('1.0')
    .addTag('swagger')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); //http://localhost:3000/api
  await app.listen(3000);
}
bootstrap();
