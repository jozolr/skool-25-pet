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

  async exécuter(creerTacheCommande: CreerTacheCommande) {
    const tache = await Tache.creer(creerTacheCommande.titre, this.tacheRepository)
    await this.tacheRepository.save(tache)

    return tache
  }
}
