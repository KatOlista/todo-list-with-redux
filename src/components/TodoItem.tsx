import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    padding: 5,
  },
});

export const TodoItem = () => {
  const classes = useStyles();

  return (
    <li className={classes.item}></li>
  );
}