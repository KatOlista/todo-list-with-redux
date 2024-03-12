import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { Todo } from '../types';
import { setTodos } from '../features/todosSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const useStyles = createUseStyles({
  item: {
    listStyle: 'none',
    padding: 5,
    color: '#fff',
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
  },
  status: {
    height: 31,
    width: 50,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left',
    backgroundImage: 'url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E)',
  },
  checkbox: {
    opacity: 0,
  },
  title: {
    margin: 0,
  },
  completed: {
    backgroundImage: 'url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)',
  },
});

type Props = {
  todo: Todo,
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const { todos } = useAppSelector(state => state.todos);

  const handleUpdateTodo = (completed: boolean) => {
    const updatedTodo = {
      ...todo,
      completed,
    };

    if (updatedTodo) {
      dispatch(setTodos(todos.map(currTodo => {
          return currTodo.id !== updatedTodo.id
            ? currTodo
            : updatedTodo;
        })));
    }
  };

  return (
    <li className={`${classes.item} animate__slideInDown animate__animated animate__fast`}>
      <label className={classes.label}>
        <div className={cn(
          classes.status,
          { [classes.completed]: todo.completed }
          )}
        >
          <input
            type="checkbox"
            className={classes.checkbox}
            checked={todo.completed}
            onChange={() => handleUpdateTodo(!todo.completed)}
          />
        </div>
        

        <p className={classes.title}>{todo.title}</p>
      </label>
    </li>
  );
}