import styles from './Delete.module.scss';
import MainAPI from '../../api/MainAPI';

const Delete = ({ children, className, ...rest }) => {
  let deleteClassName = styles.delete;

  if (className) {
    deleteClassName = `${deleteClassName} ${className}`;
  }

  const onDelete = () => {
    new MainAPI().deleteContact(rest.id);
  };

  return (
    <button
      {...rest}
      className={deleteClassName}
      onClick={onDelete}
    >
      { children }
    </button>
  );
};

export default Delete;
