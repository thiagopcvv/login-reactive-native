import { insertMaskInPhone, validatePhone } from "../phone"

describe('Phone', () => {
    it('deve retornar com a mask número de celular', () => {
        const number = '67998148524'

        expect('(67) 99814-8524').toEqual(insertMaskInPhone(number))
    })

    it('deve retornar com a mask número de telefone fixo', () => {
        const number2 = '6734424343'

        expect('(67) 3442-4343').toEqual(insertMaskInPhone(number2))
    })

    it('deve ser um número válido', () => {
        expect(true).toEqual(validatePhone('67998148524'))
        expect(true).toEqual(validatePhone('(67) 99814-8524'))
    })

    it('deve ser um número inálido', () => {
        expect(false).toEqual(validatePhone('12321'))
        expect(false).toEqual(validatePhone('1234567890123'))
    })
})