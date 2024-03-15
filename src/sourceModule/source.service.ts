import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Source } from './source.model';

@Injectable()
export class SourceService {
  constructor(
    @InjectModel('Source') private readonly sourceModel: Model<Source>,
  ) {}
  // Implement service methods for CRUD operations
}
