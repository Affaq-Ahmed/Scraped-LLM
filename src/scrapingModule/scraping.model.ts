import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ScrapingData extends Document {
  // Define properties based on scraped data
}

export const ScrapingDataSchema = SchemaFactory.createForClass(ScrapingData);
