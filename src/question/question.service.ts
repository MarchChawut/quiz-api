import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const question = await this.questionRepository.create(createQuestionDto);
    const toCreate = await this.questionRepository.insert(question);
    return toCreate;
  }

  findAll() {
    return this.questionRepository.find();
  }

  findOne(id: number) {
    return this.questionRepository.findOneBy({ id: id });
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    let question = await this.questionRepository.findOneBy({ id: id });
    question = {
      ...question,
      ...updateQuestionDto,
    };
    const toUpdate = await this.questionRepository.save(question);
    return toUpdate;
  }

  async remove(id: number) {
    const toDelete = await this.questionRepository.delete(id);
    return toDelete;
  }
}
