import { createUseStyles } from 'react-jss';

import { FILTER_OPTIONS } from '../utils';
import { Button } from '.';
import { useAppDispatch } from '../app/hooks';
import { setSelectedOption } from '../features/filterOptionSlice';

const useStyles = createUseStyles({
  filter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    gap: 20,
  },
});

export const Filter = () => {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const handleFilterTodos = (option: string) => {
    dispatch(setSelectedOption(option));
  };

  return (
    <div className={classes.filter}>
      {FILTER_OPTIONS.map(option => (
        <Button
          key={option}
          option={option}
          onClick={() => handleFilterTodos(option)}
        />
      ))}
    </div>
  );
}