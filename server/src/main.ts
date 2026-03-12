import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: (process.env.CLIENT_URL ?? 'http://localhost:5173')
      .split(',')
      .map((value) => value.trim()),
  });
  app.setGlobalPrefix('api');
  const port = Number(process.env.APP_PORT ?? process.env.PORT ?? 3000);
  await app.listen(port);
}
bootstrap();
