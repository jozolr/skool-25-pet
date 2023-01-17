import { Tache } from 'src/domain/tache'
import { Injectable } from '@nestjs/common'
import { TacheSqlModel } from 'src/infrastructure/repository/sql-model/tache.sql-model'

@Injectable()
export class TacheRepositorySql implements Tache.Repository {

  async save(tache: Tache): Promise<void> {
    await TacheSqlModel.create(tache)
  }

  async findAll(): Promise<Tache[]> {
    const sqlModel = await TacheSqlModel.findAll()
    return sqlModel.map((sqlModel) => ({
      titre: sqlModel.titre,
      id: sqlModel.id
    }))
  }

  async getByTitre(titre: string): Promise<Tache | undefined> {
    const sqlModel = await TacheSqlModel.findOne({
      where: {
        titre
      }
    })
    if (sqlModel) {
      return {
        titre: sqlModel.titre,
        id: sqlModel.id
      }
    }
  }
}