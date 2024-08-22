import { configureStore } from '@reduxjs/toolkit'
import menusSlice from './features/todos/menusSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {menusSlice},
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
