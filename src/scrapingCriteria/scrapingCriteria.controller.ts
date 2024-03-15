import { Controller } from '@nestjs/common';
import { ScrapingCriteriaService } from './scrapingCriteria.service';

@Controller('scraping-criteria')
export class ScrapingCriteriaController {
  constructor(
    private readonly scrapingCriteriaService: ScrapingCriteriaService,
  ) {}
  // Implement controller methods for CRUD operations
}
