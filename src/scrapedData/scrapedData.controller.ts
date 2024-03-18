import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ScrapedDataService } from './scrapedData.service';
import { ScrapedDataDto } from 'src/dto/scrapedData.dto';

@Controller('scraped-data')
export class ScrapedDataController {
  constructor(private readonly scrapedDataService: ScrapedDataService) {}
  // Implement controller methods for CRUD operations

  @Post()
  @HttpCode(201)
  async createScrapedData(@Body() scrapedData: ScrapedDataDto) {
    return await this.scrapedDataService.createScrapedData(scrapedData);
  }

  @Get()
  async getScrapedData() {
    return await this.scrapedDataService.getScrapedData();
  }
}
