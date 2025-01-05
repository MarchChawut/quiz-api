import {
    IsString,
    IsNumber,
  } from 'class-validator';
  
  export class CreateGuestUserDto {
    @IsString()
    rank: string;
  
    @IsString()
    name: string;
  
    @IsString()
    department: string;
  
    @IsString()
    division: string;
  
    @IsNumber()
    score: number;
  
    // @IsNumber()
    // activity: number;
  }
