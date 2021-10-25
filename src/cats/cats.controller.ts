import { HttpCode, Header, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('/cats')
@ApiTags('고양이 API')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @HttpCode(201)
  @Post()
  @ApiOperation({ summary: '고양이 정보 API', description: '고양이를 생성한다.' })
  // @ApiCreatedResponse({ description: '유저를 생성한다.'})
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  @ApiOperation({ summary: '고양이 전체 LIST', description: '고양이 전체 정보를 가져온다' })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Header('test', 'testheader')
  @Get(':id')
  @ApiOperation({ summary: '특정 고양이 정보', description: '특정 고양이 정보를 가져온다' })
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

}


