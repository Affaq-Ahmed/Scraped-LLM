import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RedditConnectorService {
  async fetchData(criteriaId: string, searchTerm: string): Promise<void> {
    // Implementation to fetch data from Reddit based on criteriaId
    try {
      const response = await axios.get(
        `${
          process.env.REDDIT_API_URL as string
        }/search.json?q=${searchTerm}&limit=${process.env.POST_FETCH_LIMIT}`,
      );

      const posts = response.data.data.children;

      console.log(posts);
      console.log(`Fetching data from Reddit using criteriaId: ${criteriaId}`);

      return posts;
    } catch (error) {
      console.error(`Error fetching data from Reddit: ${error.message}`);
      throw error;
    }
  }
}
