import styles from './Delete.module.scss';

const Delete = ({ children, className, ...rest }) => {
  let deleteClassName = styles.delete;

  if (className) {
    deleteClassName = `${deleteClassName} ${className}`;
  }

  return (
    <button {...rest} className={deleteClassName}>
      { children }
    </button>
  );
};

export default Delete;
