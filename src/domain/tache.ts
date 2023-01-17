import * as uuid from 'uuid'

export interface Tache {
  id: string
  titre: string
}

export const tacheRepositoryToken = 'TacheRepositoryToken'

export namespace Tache {
  export interface Repository {
    save(tache: Tache): Promise<void>
    getByTitre(titre: string): Promise<Tache | undefined>
    findAll(): Promise<Tache[]>
  }

  export async function creer(titre: string, repository: Repository): Promise<Tache> {
    const tacheExistante = await repository.getByTitre(titre)
    if (tacheExistante) {
      throw new Error()
    }
    return {
      titre: titre,
      id: uuid.v4()
    }
  }
}