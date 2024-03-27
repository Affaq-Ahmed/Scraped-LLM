import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScrapingCriteria } from './scrapingCriteria.model';
import { SourceService } from 'src/sourceModule/source.service';

@Injectable()
export class ScrapingCriteriaService {
  constructor(
    @InjectModel('ScrapingCriteria')
    private readonly scrapingCriteriaModel: Model<ScrapingCriteria>,
    private readonly sourceService: SourceService,
  ) {}
  // Implement service methods for CRUD operations

  async createScrapingCriteria(
    name: string,
    sourceId: string,
  ): Promise<ScrapingCriteria> {
    try {
      const checkSource = await this.sourceService.getSourceById(sourceId);
      if (!checkSource) {
        throw new HttpException(
          'Source does not exist',
          HttpStatus.BAD_REQUEST,
        );
      }

      const checkScrapingCriteria = await this.scrapingCriteriaModel.findOne({
        name: name,
      });
      if (checkScrapingCriteria) {
        throw new HttpException(
          'Scraping criteria already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      const newScrapingCriteria = new this.scrapingCriteriaModel({ name });
      return await newScrapingCriteria.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllScrapingCriteria(): Promise<ScrapingCriteria[]> {
    try {
      return await this.scrapingCriteriaModel.find();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getScrapingCriteriaById(
    scrapingCriteriaId: string,
  ): Promise<ScrapingCriteria> {
    try {
      return await this.scrapingCriteriaModel.findById(scrapingCriteriaId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getScrapingCriteriaBySource(
    sourceId: string,
  ): Promise<ScrapingCriteria[]> {
    try {
      return await this.scrapingCriteriaModel.find({ sourceId });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateScrapingCriteria(
    scrapingCriteriaId: string,
    scrapingCriteriaDto: Partial<ScrapingCriteria>,
  ): Promise<ScrapingCriteria> {
    try {
      if (scrapingCriteriaDto.sourceId) {
        const checkSource = await this.sourceService.getSourceById(
          scrapingCriteriaDto.sourceId,
        );
        if (!checkSource) {
          throw new HttpException(
            'Source does not exist',
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      return await this.scrapingCriteriaModel.findByIdAndUpdate(
        scrapingCriteriaId,
        { ...scrapingCriteriaDto },
        { new: true },
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteScrapingCriteria(
    scrapingCriteriaId: string,
  ): Promise<ScrapingCriteria> {
    try {
      return await this.scrapingCriteriaModel.findByIdAndDelete(
        scrapingCriteriaId,
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
