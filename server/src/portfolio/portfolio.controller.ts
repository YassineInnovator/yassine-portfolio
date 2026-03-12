import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioResponseDto } from './portfolio.types';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getPortfolio(): Promise<PortfolioResponseDto> {
    return this.portfolioService.getPortfolio();
  }
}
