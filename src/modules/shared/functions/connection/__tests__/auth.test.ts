import { AUTORIZATION_KEY } from "../../../constants/authConst";
import { getAuthorizationToken, logout, setAuthorizationKey, unsetAuthorizationKey } from "../auth"
import { getItemStorage, removeItemStorage, setItemStorage } from "../../storageProxy";
import { MenuUrl } from "../../../enums/MenuUrl.enum";

// const mockGetItemStorage = jest.fn()
// const mockRemoveItemStorage = jest.fn()
// const mockSetItemStorage = jest.fn()

jest.mock('../../storageProxy')

jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve('mockReturn')),
    removeItem: jest.fn(() => Promise.resolve()),
  }));

describe('auth', () => {
    it('deve chamar removeItem dentro de unsetAuthorizationKey', () => {
        unsetAuthorizationKey()

        expect(removeItemStorage).toHaveBeenCalledWith(AUTORIZATION_KEY)
    })

    it('deve chamar setITem dentro setAuthorizationKey', async () => {
        const token = 'tokenMock'
        await setAuthorizationKey(token)
        expect(setItemStorage).toHaveBeenCalledWith(AUTORIZATION_KEY, token)

    })

    it('deve chamar getItemk dentro setAuthorizationKey',   () => {
        getAuthorizationToken()
        expect(getItemStorage).toHaveBeenCalledWith(AUTORIZATION_KEY)

    })

    it('deve chamar o logout', () => {
        const navigate: any = {
            reset: jest.fn()
        }

        logout(navigate)

        expect(removeItemStorage).toHaveBeenCalledWith(AUTORIZATION_KEY)
        expect(navigate.reset).toHaveBeenCalledWith({
            index: 0,
            routes: [{name: MenuUrl.LOGIN}]
        })
    })
})