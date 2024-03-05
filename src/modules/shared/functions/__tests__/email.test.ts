import { validateEmail } from "../email"

describe('Email', () => {
    it('deve dar erro com email inválido', () => {
        expect(false).toEqual(validateEmail('jajaj.com.br'))
        expect(false).toEqual(validateEmail('abcs@asds'))
    })

    it('deve retornar sucesso', () => {
        expect(true).toEqual(validateEmail('thiagopiresdovalle@gmail.com'))
    })
})