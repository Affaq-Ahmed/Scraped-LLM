import { Controller } from '@nestjs/common';
import { SourceService } from './source.service';

@Controller('sources')
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}
  // Implement controller methods for CRUD operations
}
