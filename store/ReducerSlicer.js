import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  RegData: null,
  authLoading: true,
  getTheme: null
};

const reducerSlicer = createSlice({
  name: 'reducerSlicer',
  initialState,
  reducers: {
    setRegData: (state, action) => {
      state.RegData = action?.payload
    },
    setAuthLoader: (state, action) => {
      state.authLoading = action?.payload
    },
    setGetTheme: (state, action) => {
      state.getTheme = action?.payload
    },
    setResetAllSates: (state, action) => {
      state.RegData = action?.payload
      state.authLoading = action?.payload
      state.getTheme = action?.payload
    },

  },
});

export const {
  setRegData,
  setResetAllSates,
  setAuthLoader,
  setGetTheme
} = reducerSlicer.actions;
export default reducerSlicer.reducer;
