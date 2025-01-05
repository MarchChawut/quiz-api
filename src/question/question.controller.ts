import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('questions') // หมวดหมู่ API
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new question' }) // คำอธิบายสำหรับเอกสาร Swagger
  @ApiResponse({ status: 201, description: 'The question has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all questions' }) // คำอธิบายสำหรับการดึงข้อมูลทั้งหมด
  @ApiResponse({ status: 200, description: 'Successfully retrieved all questions.' })
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single question by ID' }) // คำอธิบายสำหรับการดึงข้อมูลตาม ID
  @ApiParam({ name: 'id', description: 'The ID of the question to retrieve' }) // อธิบายพารามิเตอร์
  @ApiResponse({ status: 200, description: 'Successfully retrieved the question.' })
  @ApiResponse({ status: 404, description: 'Question not found.' })
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a question by ID' }) // คำอธิบายสำหรับการอัปเดต
  @ApiParam({ name: 'id', description: 'The ID of the question to update' }) // อธิบายพารามิเตอร์
  @ApiResponse({ status: 200, description: 'Successfully updated the question.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 404, description: 'Question not found.' })
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a question by ID' }) // คำอธิบายสำหรับการลบข้อมูล
  @ApiParam({ name: 'id', description: 'The ID of the question to delete' }) // อธิบายพารามิเตอร์
  @ApiResponse({ status: 200, description: 'Successfully deleted the question.' })
  @ApiResponse({ status: 404, description: 'Question not found.' })
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
