import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { QuestionModule } from './question/question.module';
import { Question } from './question/entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestUserModule } from './guest-user/guest-user.module';
import { GuestUser } from './guest-user/entities/guest-user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "quiz_api",
    "entities": [Question, GuestUser],
    "synchronize": true
  }), QuestionModule, GuestUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
