import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SourceService } from './source.service';
import { SourceDto, SourceUpdateDto } from 'src/dto/source.dto';

@Controller('source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}
  // Implement controller methods for CRUD operations

  @Post()
  @HttpCode(201)
  async createSource(@Body() sourceDto: SourceDto) {
    return this.sourceService.createSource(sourceDto.name, sourceDto.baseUrl);
  }

  @Get()
  async getAllSources() {
    return this.sourceService.getAllSources();
  }

  @Put(':sourceId')
  async updateSource(
    @Param('sourceId') sourceId: string,
    @Body() sourceDto: SourceUpdateDto,
  ) {
    return this.sourceService.updateSource(sourceId, sourceDto);
  }

  @Delete(':sourceId')
  async deleteSource(@Param('sourceId') sourceId: string) {
    return this.sourceService.deleteSource(sourceId);
  }
}
