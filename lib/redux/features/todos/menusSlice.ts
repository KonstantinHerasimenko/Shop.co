

import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';
import { RootState } from '../../store';


interface menuState {
  popUp: {
    isHidden: boolean
  }
}

const initialState: menuState = {
  popUp: {
    isHidden: false,
  },
}

const menuSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    toggleMenu: (state: menuState,action:PayloadAction<keyof menuState>) => {
      state[action.payload].isHidden = !state[action.payload].isHidden
    },
  },
})

export const { toggleMenu } = menuSlice.actions

export default menuSlice.reducer