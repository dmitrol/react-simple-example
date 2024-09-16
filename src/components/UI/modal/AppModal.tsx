import classes from '../modal/AppModal.module.css';

interface IProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const AppModal: React.FC<IProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.appModal];

  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className={classes.appModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export { AppModal };
