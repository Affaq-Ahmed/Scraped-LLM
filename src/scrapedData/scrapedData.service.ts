import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScrapedData } from './scrapedData.model';
import { ScrapedDataDto } from 'src/dto/scrapedData.dto';
import { SourceService } from 'src/sourceModule/source.service';

@Injectable()
export class ScrapedDataService {
  constructor(
    @InjectModel('ScrapedData')
    private readonly scrapedDataModel: Model<ScrapedData>,
    private readonly sourceService: SourceService,
  ) {}
  // Implement service methods for CRUD operations

  async createScrapedData(data: ScrapedDataDto) {
    try {
      const {
        title,
        content,
        url,
        num_of_likes,
        num_of_comments,
        source,
        scrapingCriteria,
      } = data;

      const checkSource = await this.sourceService.getSourceById(source);
      if (!checkSource) {
        throw new HttpException(
          'Source does not exist',
          HttpStatus.BAD_REQUEST,
        );
      }

      const newScrapedData = new this.scrapedDataModel(data);
      return await newScrapedData.save();
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getScrapedData() {
    return await this.scrapedDataModel.find().exec();
  }
}
