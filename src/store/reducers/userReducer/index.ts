import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userType } from '../../../modules/shared/types/userType'

interface userStore{
    user?: userType
}

const initialState: userStore = {
    user:undefined
}

const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<userType>) => { 
        state.user = action.payload
      },
    }
  })
  
  export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
