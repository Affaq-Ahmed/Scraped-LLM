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
import { ScrapingCriteriaService } from './scrapingCriteria.service';
import {
  ScrapingCriteriaDto,
  ScrapingCriteriaUpdateDto,
} from 'src/dto/scrapingCriteria.dto';

@Controller('scraping-criteria')
export class ScrapingCriteriaController {
  constructor(
    private readonly scrapingCriteriaService: ScrapingCriteriaService,
  ) {}
  // Implement controller methods for CRUD operations

  @Post()
  @HttpCode(201)
  async createCriteria(@Body() scrapingCriteriaDto: ScrapingCriteriaDto) {
    return this.scrapingCriteriaService.createScrapingCriteria(
      scrapingCriteriaDto.name,
      scrapingCriteriaDto.sourceId,
    );
  }

  @Get()
  async getAllCriteria() {
    return this.scrapingCriteriaService.getAllScrapingCriteria();
  }

  @Get(':crieteriaId')
  async getCriteriaById(@Param('criteriaId') crieteriaId: string) {
    return this.scrapingCriteriaService.getScrapingCriteriaById(crieteriaId);
  }

  @Get(':sourceId')
  async getCriteriaBySource(@Param('sourceId') sourceId: string) {
    return this.scrapingCriteriaService.getScrapingCriteriaBySource(sourceId);
  }

  @Put(':crieteriaId')
  async updateCriteria(
    @Param('crieteriaId') crieteriaId: string,
    @Body() scrapingCriteriaUpdateDto: ScrapingCriteriaUpdateDto,
  ) {
    return this.scrapingCriteriaService.updateScrapingCriteria(
      crieteriaId,
      scrapingCriteriaUpdateDto,
    );
  }

  @Delete(':criteriaId')
  async deleteCriteria(@Param('criteriaId') criteriaId: string) {
    return this.scrapingCriteriaService.deleteScrapingCriteria(criteriaId);
  }
}
