import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  correct_ans: string;

  @Column('simple-array') // ใช้ simple-array สำหรับ array
  incorrect_answers: string[];

  @Column()
  recommend: string;

  @Column()
  point: number;
}
