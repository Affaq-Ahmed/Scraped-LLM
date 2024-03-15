import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { ScrapingModule } from './scrapingModule/scraping.module';
import { ScrapingCriteriaModule } from './scrapingCriteria/scrapingCriteria.module';
import { SourceModule } from './sourceModule/source.module';
import { ScrapedDataModule } from './scrapedData/scrapedData.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SourceModule,
    ScrapedDataModule,
    ScrapingCriteriaModule,
    ScrapingModule,
    MongooseModule.forRoot(process.env.DB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
