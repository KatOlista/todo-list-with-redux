import { createUseStyles } from 'react-jss';
import cn from 'classnames';
import { useAppSelector } from '../../app/hooks';

const useStyles = createUseStyles({
  button: {
    padding: 5,
    backgroundColor: '#3DCA95',
    color: '#fff',
    borderRadius: 5,
    border: '2px solid transparent',
    boxShadow: '3px 3px 4px #227052',
    transition: 'all 0.3s ease',

    '&:hover': {
      borderColor: '#fff',
      transform: 'scale(1.05)',
    },
  },
  selected: {
    backgroundColor: '#82d4b5',
  },
});

type Props = {
  option: string,
  onClick: () => void,
}

export const Button: React.FC<Props> = ({
  option, 
  onClick = () => {}, 
}) => {
  const classes = useStyles();

  const { selectedOption } = useAppSelector(state => state.selectedOption);

  const selected = selectedOption === option;

  return (
    <button 
      className={cn(
        classes.button,
        { [classes.selected]: selected }
      )}
      type="button"
      value={option}
      onClick={onClick}
    >
      {option}
    </button>
  );
};
