import { Module } from '@nestjs/common';
import { ScrapingCriteriaController } from './scrapingCriteria.controller';
import { ScrapingCriteriaService } from './scrapingCriteria.service';

@Module({
  controllers: [ScrapingCriteriaController],
  providers: [ScrapingCriteriaService],
})
export class ScrapingCriteriaModule {}
