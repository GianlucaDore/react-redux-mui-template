import { configureStore } from '@reduxjs/toolkit';
// import genericReducer from '../features/generic/genericSlice'
// import { apiSlice } from '../services/apiSlice'

export const store = configureStore({
  reducer: {
    // generic: genericReducer,

    // RTK Query:
    // [apiSlice.reducerPath]: apiSlice.reducer
  },
  /* middleware: (getDefaultMiddleware) => {
    // getDefaultMiddleware().concat(apiSlice.middleware)
    // ... Altri middleware custom vanno inseriti qui
  } */
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;