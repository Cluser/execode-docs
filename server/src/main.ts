import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // const httpsOptions = {
  //   key: readFileSync('./secrets/key.pem'),
  //   cert: readFileSync('./secrets/cert.pem'),
  // };

  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions,
  // });

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  
  const config = new DocumentBuilder()
    .setTitle('execode docs')
    .setDescription('execode api documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();