import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import morgan from 'morgan'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const appOptions = {
    cors:{
      origin : [
        'http://localhost:3300',
        'http://localhost:3001',
        'http://127.0.0.1:3300',
        'http://127.0.0.1:3001',
        'host.docker.internal:3001',
        'host.docker.internal:3300'
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
    .addApiKey({
      type: 'apiKey', // this should be apiKey
      name: 'api-key', // this is the name of the key you expect in header
      in: 'header',
    },
    ) 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); //http://localhost:3300/api
  await app.listen(3300);
}
bootstrap();
