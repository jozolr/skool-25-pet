import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreerTacheCommandeHandler } from 'src/application/creer-tache-command'
import { Tache } from 'src/domain/tache'
import { Database } from 'src/infrastructure/repository/database'


class CréerTachePayload {
  titre: string
}

class TacheQueryModel {
  titre: string
}

@Controller()
export class TachesController {
  constructor(
    private readonly créerTacheCommandeHandler: CreerTacheCommandeHandler,
    private readonly database: Database
  ) {}

  @Get()
  recupererLesTaches(): TacheQueryModel[] {
    return this.database.taches.map(tache => ({
      titre: tache.titre
    }))
  }

  @Post()
  créerUneTache(@Body() creerTachePayload: CréerTachePayload): Tache {
    const creerTacheCommande = { titre: creerTachePayload.titre }
    return this.créerTacheCommandeHandler.exécuter(creerTacheCommande)
  }
}

