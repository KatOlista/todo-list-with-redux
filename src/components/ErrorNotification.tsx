import { createUseStyles } from 'react-jss';
import 'animate.css';

import { useAppSelector } from '../app/hooks';

const useStyles = createUseStyles({
  errorsContainer: {
    padding: 5,
    position: 'absolute',
    top: -100,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    color: '#fff',
    borderRadius: 5,
    fontSize: 24,
    lineHeight: '1.4em',
    boxShadow: '3px 5px 7px rgba(215, 39, 0, 0.6)',
  },
  message: {
    margin: 0,
    padding: 5,
  },
});


export const ErrorNotification = () => {
  const classes = useStyles();

  const { errorMessage } = useAppSelector(state => state.newTodo);

  return (
    <div className={`${classes.errorsContainer} animate__animated animate__fadeIn animate__slow`}>
      <p className={classes.message}>{errorMessage}</p>
    </div>
  );
}