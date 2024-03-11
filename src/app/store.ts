import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import todosReducer from '../features/todosSlice';
import newTodoReducer from '../features/newTodoSlice';
import filterTodosReducer from '../features/filterOptionSlice';

export const store = configureStore({
  reducer: {
    newTodo: newTodoReducer,
    todos: todosReducer,
    selectedOption: filterTodosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
