import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ScrapedDataDocument = ScrapedData & Document;

@Schema({ timestamps: true })
export class ScrapedData {
  @Prop({ String, required: true })
  title: string;

  @Prop()
  content: string;

  @Prop()
  url: string;

  @Prop()
  num_of_likes: number;

  @Prop()
  num_of_comments: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Source' })
  source: string; // reference to the Source model

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ScrapingCriteria' })
  scrapingCriteria: string; // reference to the ScrapingCriteria model
}

export const ScrapedDataSchema = SchemaFactory.createForClass(ScrapedData);
