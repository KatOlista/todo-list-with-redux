import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    padding: 5,
    overflowY: 'scroll',
  },
});

export const TodoList = () => {
  const classes = useStyles();

  return (
    <ul className={classes.list}></ul>
  );
}