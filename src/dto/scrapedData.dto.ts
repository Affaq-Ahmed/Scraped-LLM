import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ScrapedDataDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsString()
  url: string;

  @IsNumber()
  num_of_likes: number;

  @IsNumber()
  num_of_comments: number;

  @IsString()
  source: string;

  @IsString()
  scrapingCriteria: string;
}
