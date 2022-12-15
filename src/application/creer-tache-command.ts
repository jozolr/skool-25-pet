import { Inject, Injectable } from '@nestjs/common'
import { Tache, tacheRepositoryToken } from 'src/domain/tache'

interface CreerTacheCommande {
  titre: string
}

@Injectable()
export class CreerTacheCommandeHandler {

  constructor(
    @Inject(tacheRepositoryToken)
    private tacheRepository: Tache.Repository) {
  }

  exécuter(creerTacheCommande: CreerTacheCommande) {
    const tache = Tache.creer(creerTacheCommande.titre, this.tacheRepository)
    this.tacheRepository.save(tache)

    return tache
  }
}
