import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScrapingData } from './scraping.model';

@Injectable()
export class ScrapingService {
  constructor(
    @InjectModel('ScrapingData')
    private readonly scrapingDataModel: Model<ScrapingData>,
  ) {}
  // Implement service methods for data scraping
}
