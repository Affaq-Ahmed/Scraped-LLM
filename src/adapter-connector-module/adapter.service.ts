import { Injectable } from '@nestjs/common';
import { RedditConnectorService } from './reddit-connector/reddit-connector.service';
// import { TwitterConnectorService } from './twitter-connector.service';

@Injectable()
export class AdapterService {
  constructor(
    private readonly redditConnectorService: RedditConnectorService, // private readonly twitterConnectorService: TwitterConnectorService,
  ) {}

  async fetchData(
    sourceId: string,
    criteriaId: string,
    searchTerm: string,
  ): Promise<void> {
    // Logic to determine which connector to use based on sourceId
    if (sourceId === 'reddit') {
      await this.redditConnectorService.fetchData(criteriaId, searchTerm);
    } else if (sourceId === 'twitter') {
      // await this.twitterConnectorService.fetchData(criteriaId);
    } else {
      throw new Error('Invalid source');
    }
  }
}
