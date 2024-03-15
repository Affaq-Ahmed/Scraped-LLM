import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScrapingCriteria } from './scrapingCriteria.model';

@Injectable()
export class ScrapingCriteriaService {
  constructor(
    @InjectModel('ScrapingCriteria')
    private readonly scrapingCriteriaModel: Model<ScrapingCriteria>,
  ) {}
  // Implement service methods for CRUD operations
}
