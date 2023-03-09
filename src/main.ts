import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { setupSwagger } from './docs/swagger/index';
import { AllExceptionsFilter } from './utils/HTTPExceptionsFilter';

async function bootstrap() {
  const APP_PORT = Number(process.env.APP_PORT);
  const APP_GLOBAL_PREFIX = process.env.APP_GLOBAL_PREFIX;

  const app = await NestFactory.create(AppModule);

  // Set global prefix
  app.setGlobalPrefix(APP_GLOBAL_PREFIX);

  // Set global filters(ERRORS)
  app.useGlobalFilters(new AllExceptionsFilter());

  // Enable cors
  app.enableCors();

  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(APP_PORT);
}
bootstrap();
