import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SourceDocument = Source & Document;

@Schema({ timestamps: true })
export class Source {
  @Prop({
    unique: true,
    lowercase: true,
    type: String,
    required: [true, "can't be blank"],
  })
  name: string; // human-readable name of the source

  @Prop({ String, required: [true, "can't be blank"] })
  baseUrl: string;

  @Prop()
  apiEndpoint: string; // optional API endpoint for scraping data (if using APIs)

  @Prop()
  configuration: any; // optional field for source-specific scraping configurations (e.g., selectors for web scraping)
}

export const SourceSchema = SchemaFactory.createForClass(Source);
