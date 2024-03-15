import { Module } from '@nestjs/common';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';
import { SourceSchema } from './source.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Source', schema: SourceSchema }]),
  ],
  controllers: [SourceController],
  providers: [SourceService],
})
export class SourceModule {}
