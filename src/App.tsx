import { createUseStyles } from 'react-jss';

import { useAppSelector } from './app/hooks';
import { 
  Footer, 
  Header, 
  TodoList, 
} from './components';

const useStyles = createUseStyles({
  app: {
  },

  content: {
    margin: '100px auto 100px',
    position: 'relative',
    minWidth: 290,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#161818',
    border: '1px solid #0bcdd7',
    boxShadow: '3px 5px 7px #0bcdd78f',
  },

  link: {
    paddingBottom: 25,
    display: 'block',
    position: 'relative',
    bottom: 0,
    textAlign: 'center',
    textDecoration: 'none',
    color: '#fff',

    transition: 'color 0.3s ease',

    '&:active, &:hover': {
      color: '#0bcdd7',
    }
  }
});

export const App = () => {
  const classes = useStyles();
  
  const { todos } = useAppSelector(state => state.todos);
  const isListVisible = !!todos.length;

  return (
    <div className={classes.app}>

      <div className={classes.content}>
        <Header />

        {isListVisible && (
          <TodoList />
        )}

        <Footer />
      </div>

      <a className={classes.link} href='https://katolista.github.io/KatOlista-portfolio/'>@KatOlista</a>
    </div>
  );
};

export default App
