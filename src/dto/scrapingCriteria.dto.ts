import { IsOptional, IsString } from 'class-validator';

export class ScrapingCriteriaDto {
  @IsString()
  name: string;

  @IsString()
  sourceId: string;
}

export class ScrapingCriteriaUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  sourceId: string;
}
