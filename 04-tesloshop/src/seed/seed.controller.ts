import { Controller, Get } from '@nestjs/common';

import { SeedService } from './seed.service';
import { Auth } from '../auth/decorators';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @Auth()
  findAll() {
    return this.seedService.runSeed();
  }
}
