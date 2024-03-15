import { Module } from '@nestjs/common';
import { RedditConnectorService } from './reddit-connector.service';

@Module({
  providers: [RedditConnectorService],
  exports: [RedditConnectorService],
})
export class RedditConnectorModule {}
