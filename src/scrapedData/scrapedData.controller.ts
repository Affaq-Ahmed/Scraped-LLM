import { Controller } from '@nestjs/common';
import { ScrapedDataService } from './scrapedData.service';

@Controller('scraped-data')
export class ScrapedDataController {
  constructor(private readonly scrapedDataService: ScrapedDataService) {}
  // Implement controller methods for CRUD operations
}
