import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScrapedData } from './scrapedData.model';

@Injectable()
export class ScrapedDataService {
  constructor(
    @InjectModel('ScrapedData')
    private readonly scrapedDataModel: Model<ScrapedData>,
  ) {}
  // Implement service methods for CRUD operations
}
