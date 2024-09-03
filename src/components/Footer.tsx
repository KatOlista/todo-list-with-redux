import { createUseStyles } from 'react-jss';
import html2canvas from 'html2canvas';

import { Button, Filter } from '.';
import { useAppSelector } from '../app/hooks';

const useStyles = createUseStyles({
  footer: {
    padding: 10,
  },
  buttons: {
    paddingTop: 5,
    paddingBottom: 15,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 20,
  },
  todoCount: {
    paddingTop: 15,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
  },

  '@media (min-width: 990px)': {
    footer: {
      padding: 25,
    },

    buttons: {
      paddingBottom: 25,
    },
    
    todoCount: {
      paddingTop: 25
    }
  }
});

export const Footer = () => {
  const classes = useStyles();

  const handleExportTodosAsImg = () => {
    const capturedElement = document.getElementById('capture') as HTMLElement;
    const liArray = Array.from(capturedElement.getElementsByTagName('li'));
    liArray.forEach(li => li.classList.remove('animate__slideInDown'));
    html2canvas(capturedElement)?.then(canvas => {
        const fileName = 'todos.png';
        const href = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.href = href;
        element.download = fileName;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        liArray.forEach(li => li.classList.add('animate__slideInDown'));
    });
  };

  const { todos } = useAppSelector(state => state.todos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = todos.filter(todo => !todo.completed).length;

  return (
    <footer className={classes.footer}> 
      <div className={classes.buttons}>
        <Filter />
      </div>

      <Button
        option='Download as png'
        onClick={handleExportTodosAsImg}
      />

      <div className={classes.todoCount}>
        <span>
          {`Completed tasks: ${completedTodos}`}
        </span>

        <span>
          {`Active tasks: ${activeTodos}`}
        </span>
      </div>
    </footer>
  );
}