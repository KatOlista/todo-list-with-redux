import { createUseStyles } from 'react-jss';
import 'animate.css';
import { v4 as uuid } from 'uuid';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ERROR_MESSAGES, MAX_LENGTH } from '../utils';
import { addTodo } from '../features/todosSlice';
import { 
  clearForm, 
  setError, 
  setTitle, 
} from '../features/newTodoSlice';
import { ErrorNotification } from '.';

const useStyles = createUseStyles({
  form: {
    paddingBlock: 10,
  },
  input: {
    width: '100%',
    padding: 16,
    fontSize: 20,
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
      color: '#0bcdd7',
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
  const { error } = useAppSelector(state => state.newTodo);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value.trim()));
    dispatch(setError({ 
      error: false, 
      errorMassage: ERROR_MESSAGES.default,
    }));
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      return dispatch(setError({ 
        error: true, 
        errorMassage: ERROR_MESSAGES.emptyTitle, 
      }));
    }

    if (title.length > MAX_LENGTH) {
      return dispatch(setError({ 
        error: true, 
        errorMassage: ERROR_MESSAGES.tooLongTitle, 
      }));
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
    <header>
      {error && (
        <ErrorNotification />
      )}

      <form 
        className={classes.form} 
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <input
          value={title}
          type="text"
          className={classes.input}
          placeholder="What do you need to do?"
          onChange={handleChangeInput}
        />
      </form>
    </header>
  );
}