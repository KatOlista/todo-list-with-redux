import { createUseStyles } from 'react-jss';

import { useAppSelector } from './app/hooks';
import { 
  Footer, 
  Header, 
  TodoList, 
} from './components';

const useStyles = createUseStyles({
  app: {
    margin: '150px auto 0',
    position: 'relative',
    minWidth: 320,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#0b9561',
    boxShadow: '3px 5px 7px #227052',
  },
});

export const App = () => {
  const classes = useStyles();
  
  const { todos } = useAppSelector(state => state.todos);
  const isListVisible = !!todos.length;

  return (
    <div className={classes.app}>
      <Header />

      {isListVisible && (
        <TodoList />
      )}

      <Footer />
    </div>
  );
};

export default App
