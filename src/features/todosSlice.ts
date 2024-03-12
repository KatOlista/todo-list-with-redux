import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types';

type TodosState = {
  todos: Todo[],
  payload: string,
};

const initialState: TodosState = {
  todos: [],
  payload: '',
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      return state;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload);
    },
  },
});

export default todosSlice.reducer;
export const { setTodos, addTodo } = todosSlice.actions;
