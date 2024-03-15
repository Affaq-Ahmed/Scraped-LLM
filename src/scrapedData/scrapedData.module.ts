import { Module } from '@nestjs/common';
import { ScrapedDataController } from './scrapedData.controller';
import { ScrapedDataService } from './scrapedData.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScrapedDataSchema } from './scrapedData.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ScrapedData', schema: ScrapedDataSchema },
    ]),
  ],
  controllers: [ScrapedDataController],
  providers: [ScrapedDataService],
})
export class ScrapedDataModule {}
