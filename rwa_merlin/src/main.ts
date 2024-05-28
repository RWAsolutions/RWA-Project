import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConnectionService } from './connection/connection.service';

async function bootstrap() {
  var connectionService = new ConnectionService();
  connectionService.testConnection();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
