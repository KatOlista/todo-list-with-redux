import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type NewTodoState = {
  title: string,
  error: boolean,
  errorMessage: string,
};

const initialState: NewTodoState = {
  title: '',
  error: false,
  errorMessage: '',
};

type ErrorPayloadAction = {
  error: boolean,
  errorMassage: string,
}

export const newTodoSlice = createSlice({
  name: 'newTodo',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorPayloadAction>) => {
      state.error = action.payload.error;
      state.errorMessage = action.payload.errorMassage;
    },
    clearForm: (state) => {
      state.title = initialState.title;
      state.error = initialState.error;
    },
  },
});

export default newTodoSlice.reducer;
export const { setTitle, setError, clearForm } = newTodoSlice.actions;
