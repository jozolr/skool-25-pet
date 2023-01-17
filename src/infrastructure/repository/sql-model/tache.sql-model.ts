import { Column, DataType, PrimaryKey, Table, Model } from 'sequelize-typescript'

@Table({
  timestamps: false,
  tableName: 'tache'
})
export class TacheSqlModel extends Model {
  @PrimaryKey
  @Column({
    field: 'id',
    type: DataType.STRING
  })
  id: string

  @Column({
    field: 'titre',
    type: DataType.STRING
  })
  titre: string
}
