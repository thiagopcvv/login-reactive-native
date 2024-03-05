import { convertNumber } from "../money"

describe('money', () => {
const returnMoney = convertNumber(55)
    it('deve retornar dinheiro corretamente', () => {
        expect(returnMoney).toContain('R$')
        expect(returnMoney).toContain('55,00')
    })

    it('deve retornar dinheiro corretamente com decimal', () => {
        const returnMoney = convertNumber(55.54)
        expect(returnMoney).toContain('R$')
        expect(returnMoney).toContain('55,54')
    })
    
    it('deve retornar dinheiro corretamente com decimal e milhar', () => {
        const returnMoney = convertNumber(1255.54)
        expect(returnMoney).toContain('R$')
        expect(returnMoney).toContain('1.255,54')
    })
})