import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartType } from '../../../modules/shared/types/CartType'

interface CartStore{
    cart?: CartType
}

const initialState: CartStore = {
    cart: undefined
}

const CartSlice = createSlice({
    name: 'CartReducer',
    initialState,
    reducers: {
      setCartsAction: (state, action: PayloadAction<CartType>) => { 
        state.cart = action.payload
      },
    }
  })
  
  export const { setCartsAction } = CartSlice.actions;
export default CartSlice.reducer;
