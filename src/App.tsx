import { createUseStyles } from 'react-jss';

import { useAppSelector } from './app/hooks';
import { 
  ErrorNotification, 
  Footer, 
  Header, 
  TodoList, 
} from './components';

const useStyles = createUseStyles({
  app: {
    minWidth: 320,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#0b9561',
    border: '2px solid transparent',
    boxShadow: '3px 5px 7px #227052',
  },
});

export const App = () => {
  const classes = useStyles();

  const { error, errorMessage } = useAppSelector(state => state.newTodo);

  return (
    <div className={classes.app}>
      <Header />

      <TodoList />

      <Footer />

      {error && (
        <ErrorNotification errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default App
