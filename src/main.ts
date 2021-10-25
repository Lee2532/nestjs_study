import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { logger } from './common/common.logger';
import morgan from 'morgan'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const appOptions = {
    cors:{
      origin : [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
      ]
    }
  }

  const app = await NestFactory.create(AppModule, appOptions);
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
