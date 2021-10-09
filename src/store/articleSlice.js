import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {
    name: "",
    location: "",
    rating: "",
  },
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {    
    update: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.item[action.payload.type] = action.payload.value;
    },
  },
})
// Action creators are generated for each case reducer function
export const { update } = articleSlice.actions
export default articleSlice.reducer;
