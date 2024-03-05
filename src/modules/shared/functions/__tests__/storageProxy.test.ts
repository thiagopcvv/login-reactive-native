import AsyncStorage from '@react-native-async-storage/async-storage';

import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

const mockReturn = 'abc';
const mockKey = 'key';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(mockReturn)),
  removeItem: jest.fn(() => Promise.resolve()),
}));

describe('storageProxy', () => {
  it('deve setar item no storage', () => {
    setItemStorage(mockKey, 'value');

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(mockKey, 'value');
  });

  it('deve conter item no storage', async () => {
    const returnProxy = await getItemStorage(mockKey);
    expect(returnProxy).toEqual(mockReturn);
  });

  it('deve remover item do storage', async () => {
    removeItemStorage(mockKey);

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(mockKey);
  });
});
