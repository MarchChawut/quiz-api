import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // เปิดใช้งาน ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  // ตั้งค่า Swagger
  const config = new DocumentBuilder()
    .setTitle('Quiz API') // ชื่อ API
    .setDescription('The Quiz API documentation') // คำอธิบาย
    .setVersion('1.0') // เวอร์ชันของ API
    .addTag('question') // เพิ่มแท็ก (optional)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // URL path สำหรับ Swagger

  await app.listen(process.env.PORT ?? 3060);
}
bootstrap();
