import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Source } from './source.model';

@Injectable()
export class SourceService {
  constructor(
    @InjectModel('Source') private readonly sourceModel: Model<Source>,
  ) {}
  // Implement service methods for CRUD operations

  async createSource(name: string, baseUrl: string): Promise<Source> {
    try {
      const checkSource = await this.sourceModel.findOne({ name: name });
      if (checkSource) {
        throw new HttpException(
          'Source already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      const newSource = new this.sourceModel({ name, baseUrl });
      return await newSource.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllSources(): Promise<Source[]> {
    try {
      return await this.sourceModel.find();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateSource(
    sourceId: string,
    sourceDto: Partial<Source>,
  ): Promise<Source> {
    try {
      return await this.sourceModel.findByIdAndUpdate(
        sourceId,
        { ...sourceDto },
        { new: true },
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteSource(sourceId: string): Promise<Source> {
    try {
      return await this.sourceModel.findByIdAndDelete(sourceId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
