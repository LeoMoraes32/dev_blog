import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { setupSwagger } from './docs/swagger/index';

async function bootstrap() {
  const APP_PORT = Number(process.env.APP_PORT);
  const APP_GLOBAL_PREFIX = process.env.APP_GLOBAL_PREFIX;

  const app = await NestFactory.create(AppModule);

  // Set global prefix
  app.setGlobalPrefix(APP_GLOBAL_PREFIX);

  // Enable cors
  app.enableCors();

  await app.listen(APP_PORT);
  setupSwagger(app);
}
bootstrap();
