import * as uuid from 'uuid'

export interface Tache {
  id: string
  titre: string
}

export const tacheRepositoryToken = 'TacheRepositoryToken'

export namespace Tache {
  export interface Repository {
    save(tache: Tache): void
    getByTitre(titre: string): Tache
    findAll(): Tache[]
  }

  export function creer(titre: string, repository: Repository): Tache {
    const tacheExistante = repository.getByTitre(titre)
    if (tacheExistante) {
      throw new Error()
    }
    return {
      titre: titre,
      id: uuid.v4()
    }
  }
}