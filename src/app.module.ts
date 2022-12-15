import { Module } from '@nestjs/common';
import { TachesController } from 'src/infrastructure/controller/taches-controller';
import { CreerTacheCommandeHandler } from 'src/application/creer-tache-command';
import { TacheRepositoryInMemory } from 'src/infrastructure/repository/tache-repository-in-memory'
import { tacheRepositoryToken } from 'src/domain/tache'
import { Database } from 'src/infrastructure/repository/database'

@Module({
  imports: [],
  controllers: [TachesController],
  providers: [
    CreerTacheCommandeHandler,
    Database,
    {
      provide: tacheRepositoryToken,
      useClass: TacheRepositoryInMemory
    },
  ],
})
export class AppModule {}
