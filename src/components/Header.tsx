import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    backgroundColor: 'yellow',
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      
    </header>
  );
}