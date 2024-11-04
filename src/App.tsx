import { createUseStyles } from 'react-jss';

import { useAppSelector } from './app/hooks';
import { 
  Footer, 
  Header, 
  TodoList, 
} from './components';

import bg from './assets/bg4.webp';

const useStyles = createUseStyles({
  app: {
    minHeight: '100vh',
    height: '100%',
    padding: '100px 0 50px',
    display: 'flex',
    flexDirection: 'column',
    background: `url(${bg}) 100% 100%/cover no-repeat`,
  },

  main: {
    flex: 'auto',
  },

  content: {
    left: '50%',
    position: 'relative',
    minWidth: 290,
    maxWidth: 450,
    padding: 5,
    borderRadius: 15,
    transform: 'translateX(-50%)',
    background: 'rgba(0,0,0,0.2)',
    '-webkit-backdrop-filter': 'blur(7px)',
    backdropFilter: 'blur(7px)',
  },

  link: {
    paddingTop: 50,
    paddingBottom: 50,
    display: 'block',
    position: 'relative',
    bottom: 0,
    textAlign: 'center',
    textDecoration: 'none',
    color: '#fff',

    transition: 'color 0.3s ease',

    '&:active, &:hover': {
      color: '#5a5858af',
    }
  }
});

export const App = () => {
  const classes = useStyles();
  
  const { todos } = useAppSelector(state => state.todos);
  const isListVisible = !!todos.length;

  return (
    <div className={classes.app}>

      <main className={classes.main}>
        <div className={classes.content}>
          <Header />

          {isListVisible && (
            <TodoList />
          )}

          <Footer />
        </div>
      </main>

      <a className={classes.link} href='https://katolista.github.io/KatOlista-portfolio/'>@KatOlista</a>
    </div>
  );
};

export default App
