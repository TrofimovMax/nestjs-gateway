import { NestFactory } from '@nestjs/core';
import { GymsGQLModule } from './gyms.module';

async function bootstrap() {
  const app = await NestFactory.create(GymsGQLModule);
  await app.listen(3000);
}
bootstrap();
