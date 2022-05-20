import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: 0,
};

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = sectionSlice.actions;

export default sectionSlice.reducer;
