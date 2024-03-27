import { Module } from '@nestjs/common';
import { ScrapingCriteriaController } from './scrapingCriteria.controller';
import { ScrapingCriteriaService } from './scrapingCriteria.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScrapingCriteriaSchema } from './scrapingCriteria.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ScrapingCriteria', schema: ScrapingCriteriaSchema },
    ]),
  ],
  controllers: [ScrapingCriteriaController],
  providers: [ScrapingCriteriaService],
})
export class ScrapingCriteriaModule {}
