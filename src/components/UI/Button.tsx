import { createUseStyles } from 'react-jss';
import cn from 'classnames';

import { useAppSelector } from '../../app/hooks';

const useStyles = createUseStyles({
  button: {
    padding: '10px 20px',
    width: '100%',
    backgroundColor: '#5a585859',
    color: '#fff',
    borderRadius: 5,
    border: '1px solid transparent',
    boxShadow: '1px 1px 4px #ffffff8f',

    transition: 'all 0.3s ease',

    '&:active': {
      borderColor: '#fff',
      transform: 'scale(0.95)',
    },

    '@media (min-width: 425px)': {
      fontSize: 16,
    },

    '@media (min-width: 990px)': {
      fontSize: 20,

      '&:hover': {
        borderColor: '#fff',
        transform: 'scale(0.97)',
        cursor: 'pointer',
      },
    }
  },
  selected: {
    backgroundColor: '#5a5858af',
    color: '#f4dbda',
    transform: 'scale(1.03)',
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
