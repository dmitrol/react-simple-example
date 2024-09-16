import classes from '../input/AppInput.module.css';

const AppInput: React.FC<React.ComponentPropsWithoutRef<'input'>> = ({
  ...items
}) => {
  return <input {...items} className={classes.input}></input>;
};

export { AppInput };
