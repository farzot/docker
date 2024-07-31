import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3001;
  await await app.listen(PORT, () => {
    console.log(
      `Server is running in MODE: ${process.env.NODE_ENV}on port ${PORT}`,
    ); // logging the port number
  });
}
bootstrap();
