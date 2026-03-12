import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createPrismaPgAdapter } from './adapter';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      adapter: createPrismaPgAdapter(),
    });
  }
}
