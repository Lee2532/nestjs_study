import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { logger } from './common/common.logger';
import morgan from 'morgan'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let logger = require('morgan');

  app.use(logger('combined'))

  await app.listen(3000);
}
bootstrap();
