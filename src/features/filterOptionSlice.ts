import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FILTER_OPTIONS } from '../utils';

type FilterTodosState = {
  selectedOption: string,
  payload: string,
};

const initialState: FilterTodosState = {
  selectedOption: FILTER_OPTIONS[0],
  payload: FILTER_OPTIONS[0],
};

export const filterTodosSlice = createSlice({
  name: 'filterTodos',
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export default filterTodosSlice.reducer;
export const { setSelectedOption } = filterTodosSlice.actions;
