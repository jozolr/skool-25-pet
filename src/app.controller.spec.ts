import { Test, TestingModule } from '@nestjs/testing';
import { TachesController } from 'src/infrastructure/controller/taches-controller';
import { CreerTacheCommandeHandler } from 'src/application/creer-tache-command';

describe('AppController', () => {
  let appController: TachesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TachesController],
      providers: [CreerTacheCommandeHandler],
    }).compile();

    appController = app.get<TachesController>(TachesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.créerUneTache()).toBe('Hello World!');
    });
  });
});
