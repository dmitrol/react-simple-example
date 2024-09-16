import classes from '../button/AppButton.module.css';

const AppButton: React.FC<React.ComponentPropsWithoutRef<'button'>> = ({
  children,
  ...items
}) => {
  return (
    <button {...items} className={classes.btn}>
      {children}
    </button>
  );
};

export { AppButton };
