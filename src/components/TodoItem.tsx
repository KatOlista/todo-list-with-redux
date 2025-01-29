import cn from 'classnames';
import { createUseStyles } from 'react-jss';

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
    backgroundImage: `url('./circle.svg')`,
  },
  checkbox: {
    opacity: 0,
  },
  title: {
    margin: 0,
  },
  completed: {
    backgroundImage: `url('./checked-circle.svg')`
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
    {/* <li className={classes.item}> */}
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