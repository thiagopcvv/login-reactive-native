import {CartProductType} from '../../../../modules/shared/types/CartType';
import {mockProduct} from '../../productReducer/__mocks__/product.mock';

export const mockCartProduct: CartProductType = {
  amount: 543,
  cartId: 34,
  id: 643,
  productId: mockProduct._id,
  product: mockProduct,
};
