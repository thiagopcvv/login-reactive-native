import {renderHook} from '@testing-library/react-native';
import {useCartReducer} from '../useCartReducer';
import {mockCart} from '../__mocks__/cart.mock';
import {act} from 'react-test-renderer';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('../../../hoooks/hook', () => ({
  useAppSelector: () => ({
    cart: mockCart,
  }),
}));

jest.mock('..', () => ({
  setCartsAction: () => null,
}));

describe('', () => {
  const {result} = renderHook(() => useCartReducer());

  it('deve retornar variável cart', () => {
    expect(result.current.cart).toEqual(mockCart);
  });

  it('deve chamar o setCart', () => {
    act(() => {
      result.current.setCart(mockCart);
    });
    expect(mockDispatch).toHaveBeenCalled();
  });
});
