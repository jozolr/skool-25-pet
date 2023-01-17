import { Module } from '@nestjs/common';
import { TachesController } from 'src/infrastructure/controller/taches-controller';
import { CreerTacheCommandeHandler } from 'src/application/creer-tache-command';
import { TacheRepositorySql } from 'src/infrastructure/repository/tache-repository-sql'
import { tacheRepositoryToken } from 'src/domain/tache'
import { ConfigModule } from '@nestjs/config'
import configuration from 'src/config/configuration'
import { databaseProviders } from 'src/infrastructure/database/providers'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      cache: true,
      load: [configuration]
    }),

  ],
  controllers: [TachesController],
  providers: [
    CreerTacheCommandeHandler,
    {
      provide: tacheRepositoryToken,
      useClass: TacheRepositorySql
    },
    ...databaseProviders
  ],
  exports: [
    ...databaseProviders
  ]
})
export class AppModule {}
