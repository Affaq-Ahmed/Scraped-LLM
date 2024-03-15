import { Module } from '@nestjs/common';
import { AdapterService } from './adapter.service';

@Module({
  controllers: [],
  providers: [AdapterService],
})
export class AdapterModule {}
