import { IsString, IsArray, ArrayMinSize, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({ description: 'The question text' }) // คำอธิบายฟิลด์
  @IsString()
  question: string;

  @ApiProperty({ description: 'The correct answer' })
  @IsString()
  correct_ans: string;

  @ApiProperty({ description: 'The incorrect answers', example: ['Answer 1', 'Answer 2'] })
  @IsArray()
  @ArrayMinSize(1)
  incorrect_answers: string[];

  @ApiProperty({ description: 'Counsel text', required: false })
  @IsOptional()
  @IsString()
  recommend: string;

  point: number;
}