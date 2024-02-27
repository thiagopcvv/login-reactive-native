import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../../modules/shared/types/productType'
import { PaginationType } from '../../../modules/shared/types/SearchType'

interface ProductStore{
    products: ProductType[],
    searchProducts?: PaginationType<ProductType[]>
}

const initialState: ProductStore = {
    products: [],
    searchProducts: undefined
}

const productSlice = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
      setProductsAction: (state, action: PayloadAction<ProductType[]>) => { 
        state.products = action.payload
      },
      setSearchProductsAction: (state, action: PayloadAction<PaginationType<ProductType[]>>) => { 
        state.searchProducts = action.payload
      },
    }
  })
  
  export const { setProductsAction, setSearchProductsAction } = productSlice.actions;
export default productSlice.reducer;
