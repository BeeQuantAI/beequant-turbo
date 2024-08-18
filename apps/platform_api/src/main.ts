import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3010',
    exposedHeaders: ['x-auth-status', 'x-new-access-token'],
    credentials: true,
  });
  await app.listen(3000);
}

bootstrap();
