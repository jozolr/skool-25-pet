import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreerTacheCommandeHandler } from 'src/application/creer-tache-command'
import { Tache } from 'src/domain/tache'
import { TacheSqlModel } from 'src/infrastructure/repository/sql-model/tache.sql-model'
import { ApiProperty, ApiResponse } from '@nestjs/swagger'

class CréerTachePayload {
  @ApiProperty()
  titre: string
}

class TacheQueryModel {
  @ApiProperty()
  titre: string
}

@Controller('taches')
export class TachesController {
  constructor(
    private readonly créerTacheCommandeHandler: CreerTacheCommandeHandler
  ) {}

  @Get()
  @ApiResponse({
    type: TacheQueryModel,
    isArray: true
  })
  async recupererLesTaches(): Promise<TacheQueryModel[]> {
    const tachesEntities = await TacheSqlModel.findAll()
    return tachesEntities.map(tacheEntity => ({
      titre: tacheEntity.titre
    }))
  }

  @Post()
  créerUneTache(@Body() creerTachePayload: CréerTachePayload): Promise<Tache> {
    const creerTacheCommande = { titre: creerTachePayload.titre }
    return this.créerTacheCommandeHandler.exécuter(creerTacheCommande)
  }
}

