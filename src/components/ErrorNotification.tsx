import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  errorsContainer: {
    padding: 5,
  },
  message: {
    padding: 5,
  },
});

type Props = {
  errorMessage: string,
}

export const ErrorNotification: React.FC<Props> = ({ errorMessage }) => {
  const classes = useStyles();

  return (
    <div className={classes.errorsContainer}>
      <p className={classes.message}>{errorMessage}</p>
    </div>
  );
}