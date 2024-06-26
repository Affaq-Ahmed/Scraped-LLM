import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ScrapingCriteriaDocument = ScrapingCriteria & Document;

@Schema({ timestamps: true })
export class ScrapingCriteria {
  @Prop({ type: String })
  name: string; // array of keywords to search for

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Source' })
  sourceId?: string; // optional reference to a specific source (if scraping from specific source)
}

export const ScrapingCriteriaSchema =
  SchemaFactory.createForClass(ScrapingCriteria);
