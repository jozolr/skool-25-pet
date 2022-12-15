import { Tache } from 'src/domain/tache'
import { Injectable } from '@nestjs/common'

@Injectable()
export class Database {
  public taches: Tache[]

  constructor() {
    this.taches = []
  }
}