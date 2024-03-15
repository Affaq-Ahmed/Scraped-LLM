import { IsOptional, IsString } from 'class-validator';

export class SourceDto {
  @IsString()
  name: string;

  @IsString()
  baseUrl: string;
}

export class SourceUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  baseUrl: string;

  @IsOptional()
  @IsString()
  apiEndpoint: string;
}
