import { connect } from 'react-redux';
import styles from './Delete.module.scss';
import MainAPI from '../../api/MainAPI';
import mapDispatchToProps from '../../redux/action';

const Delete = ({
  children, className, actions, name, onSuccessDelete, ...rest
}) => {
  let deleteClassName = styles.delete;

  if (className) {
    deleteClassName = `${deleteClassName} ${className}`;
  }

  const onDelete = () => {
    actions.confirmToDo(`delete ${name}?`, () => {
      new MainAPI().deleteContact(rest.id).then((resp) => {
        console.log('getdate resp ====', resp);
        onSuccessDelete();
      });
    });
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

export default connect(
  (state) => state,
  mapDispatchToProps,
)(Delete);
