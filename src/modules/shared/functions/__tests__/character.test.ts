import { removeSpecialCharacters } from "../characters"

describe('Character', () => {
    it('deve remover caracteres que não sejam números', () => {
        const specialCharacters = 'abv333cde-asdsa,kk33k*a'

        expect('33333').toEqual(removeSpecialCharacters(specialCharacters))
    })
})