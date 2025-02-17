import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { QuestionModule } from './question/question.module';
import { Question } from './question/entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestUserModule } from './guest-user/guest-user.module';
import { GuestUser } from './guest-user/entities/guest-user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ทำให้สามารถใช้ค่าจาก .env ได้ทั่วทั้งโปรเจค
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Question, GuestUser],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    QuestionModule,
    GuestUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
