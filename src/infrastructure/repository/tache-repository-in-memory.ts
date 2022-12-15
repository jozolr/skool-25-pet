import { Tache } from 'src/domain/tache'
import { Injectable } from '@nestjs/common'
import { Database } from 'src/infrastructure/repository/database'

@Injectable()
export class TacheRepositoryInMemory implements Tache.Repository {
  constructor(private database: Database) {
  }

  save(tache: Tache): void {
    this.database.taches.push(tache)
  }

  findAll(): Tache[] {
    return this.database.taches
  }

  getByTitre(titre: string): Tache | undefined {
    return this.database.taches.find(tache => tache.titre === titre)
  }
}