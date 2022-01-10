import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'store',
  initialState: {
    token: null,
    authorized: false,
  },
  reducers: {
    storeJwt: (state, action) => {
      state.token = action.payload
    },
    isAuthorized: (state, action) => {
      state.authorized = action.payload
    },
    signOut: (state) => {
      state.token = null
      state.authorized = false
    },
  },
})

export const { storeJwt, signOut, isAuthorized } = slice.actions
export default slice.reducer
