import { createUseStyles } from 'react-jss';

import { useAppSelector } from '../app/hooks';
import { TodoItem } from '.';
import { useEffect, useState } from 'react';
import { Todo } from '../types';

const useStyles = createUseStyles({
  list: {
    margin: 0,
    padding: 5,
    backgroundColor: '#0b9561',
    animationName: 'appearance',
    animationDuration: '0.5s',
  },
});

const getFilteredTodos = (todos: Todo[], option: string) => {
  return todos.filter(todo => {
    switch(option) {
      case 'Completed': return todo.completed;

      case 'Active': return !todo.completed;

      default: return todo;
    }});
};

export const TodoList = () => {
  const classes = useStyles();

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  const { todos } = useAppSelector(state => state.todos);
  const { selectedOption } = useAppSelector(state => state.selectedOption);

  useEffect(() => {
    setFilteredTodos(getFilteredTodos(todos, selectedOption));
  }, [todos, selectedOption]);

  return (
    <ul 
      className={classes.list}
      id="capture"
    >
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}