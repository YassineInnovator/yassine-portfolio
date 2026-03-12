import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('status', () => {
    it('should expose the API health payload', () => {
      expect(appController.getStatus()).toMatchObject({
        service: 'yassine-portfolio-api',
        status: 'ok',
      });
    });
  });
});
