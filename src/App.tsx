import { createUseStyles } from 'react-jss';
import { Footer, Header, TodoList } from './components';

const useStyles = createUseStyles({
  app: {
    minWidth: 320,
    width: '70%',
    height: '65vh',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#0b9561',
    border: '2px solid transparent',
    boxShadow: '3px 5px 7px #227052',
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />

      <TodoList />

      <Footer />
    </div>
  );
};

export default App
