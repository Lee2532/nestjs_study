import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { logger } from './common/common.logger';
import morgan from 'morgan'

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

  await app.listen(3000);
}
bootstrap();
