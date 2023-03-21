import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },

    getGenresConfiguration: (state, action) => {
      state.genres = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {getApiConfiguration, getGenresConfiguration} = homeSlice.actions

export default homeSlice.reducer