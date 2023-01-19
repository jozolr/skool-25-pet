import { Tache } from './tache'
import { when } from 'jest-when'

describe('Tache', () => {
  describe('créer', () => {
    describe('quand aucune tache n\'existe avec le même titre', () => {
      it('créé la tache', async () => {
        // Given
        const repository: Tache.Repository = {
          save: jest.fn(),
          getByTitre: jest.fn(),
          findAll: jest.fn()
        }

        when(repository.getByTitre).calledWith('titre').mockResolvedValue(undefined)

        // When
        const tache = await Tache.creer('titre', repository)

        // Then
        expect(tache).toEqual({
          titre: 'titre',
          id: expect.any(String)
        })
      })
    })
    describe('quand une tache existe avec le même titre', () => {
      it('rejette', async () => {
        // Given
        const repository: Tache.Repository = {
          save: jest.fn(),
          getByTitre: jest.fn(),
          findAll: jest.fn()
        }

        when(repository.getByTitre).calledWith('titre').mockResolvedValue({
          titre: 'titre',
          id: 'id'
        })

        // When
        const creerTache = Tache.creer('titre', repository)

        // Then
        expect(creerTache).rejects.toThrow()
      })
    })
  })
})