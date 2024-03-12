import { createUseStyles } from 'react-jss';
import html2canvas from 'html2canvas';

import { Button, Filter } from '.';
import { useAppSelector } from '../app/hooks';

const useStyles = createUseStyles({
  footer: {
    padding: 10,
  },
  buttons: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 20,
  },
  todoCount: {
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
  },
});

export const Footer = () => {
  const classes = useStyles();

  const handleExportTodosAsImg = () => {
    html2canvas(document.getElementById('capture') as HTMLElement)
      ?.then(canvas => {
        const fileName = 'todos.png';
        const href = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.href = href;
        element.download = fileName;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });
  };

  const { todos } = useAppSelector(state => state.todos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = todos.filter(todo => !todo.completed).length;

  return (
    <footer className={classes.footer}> 
      <div className={classes.buttons}>
        <Filter />

        <Button
          option='Download as png'
          onClick={handleExportTodosAsImg}
        />
      </div>

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