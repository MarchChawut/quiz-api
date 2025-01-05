import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GuestUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  rank: string;

  @Column({ length: 250 })
  name: string;
  
  @Column({ length: 250 })
  department: string;

  @Column({ length: 250 })
  division: string;

  @Column({ type: 'int'})
  score: number;

//   @Column({ type: 'int'})
//   activity: number;

//   @Column({ default: true })
//   isActive: boolean;
}
