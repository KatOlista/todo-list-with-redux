import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    width: '100%',
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}></footer>
  );
}