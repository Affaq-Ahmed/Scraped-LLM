import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SourceDocument = Source & Document;

@Schema({ timestamps: true })
export class Source {
  @Prop()
  sourceId: string; // unique identifier for the source

  @Prop()
  name: string; // human-readable name of the source

  @Prop()
  baseUrl: string; // optional base URL for the source (if applicable)

  @Prop()
  apiEndpoint: string; // optional API endpoint for scraping data (if using APIs)

  @Prop()
  configuration: any; // optional field for source-specific scraping configurations (e.g., selectors for web scraping)
}

export const SourceSchema = SchemaFactory.createForClass(Source);
