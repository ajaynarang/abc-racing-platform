import { configureStore } from "@reduxjs/toolkit"
import fixturesReducer from "./fixtures-slice"

export const store = configureStore({
  reducer: {
    fixtures: fixturesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

