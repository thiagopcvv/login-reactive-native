import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userType } from '../../../modules/shared/types/userType'
import { GlobalModalType } from '../../../modules/modal/globalModal/GlobalModal'


interface GlobalStore{
    modal?: GlobalModalType
}

const initialState: GlobalStore = {
   modal: {
    visible: false,
    title: '',
    text: '',
   }
}

const GlobalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      setModalActions: (state, action: PayloadAction<GlobalModalType>) => { 
        state.modal = action.payload
      },
    }
  })
  
  export const { setModalActions } = GlobalSlice.actions;
export const globalReducer = GlobalSlice.reducer;
