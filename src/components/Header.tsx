import { createUseStyles } from 'react-jss';
import { v4 as uuid } from 'uuid';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ERROR_MESSAGES, MAX_LENGTH } from '../utils';
import { addTodo } from '../features/todosSlice';
import { 
  clearForm, 
  setError, 
  setTitle, 
} from '../features/newTodoSlice';

const useStyles = createUseStyles({
  header: {
  },
  form: {},
  input: {
    width: '100%',
    padding: 16,
    fontSize: 24,
    lineHeight: '1.4em',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    color: '#fff',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    border: 'none',
    background: 'rgba(0, 0, 0, 0.01)',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',

    '&::placeholder': {
      fontStyle: 'italic',
      fontWeight: 300,
      color: '#e6e6e6',
    },
    '&:focus-visible': {
      outline: 'white auto 1px',
    },
  },
});

export const Header = () => {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const { title } = useAppSelector(state => state.newTodo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
    dispatch(setError({ 
      error: false, 
      errorMassage: ERROR_MESSAGES.default, 
    }));
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      dispatch(setError({ 
        error: true, 
        errorMassage: ERROR_MESSAGES.emptyTitle, 
      }));
      return;
    }

    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    }

    dispatch(addTodo(newTodo));

    dispatch(clearForm());
  };
  
  return (
    <header className={classes.header}>
      <form 
        className={classes.form} 
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <input
          data-cy="NewTodoField"
          value={title}
          type="text"
          maxLength={MAX_LENGTH}
          className={classes.input}
          placeholder="What needs to be done?"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}