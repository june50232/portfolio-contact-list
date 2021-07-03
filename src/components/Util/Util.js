import { connect } from 'react-redux';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './Util.module.scss';
import mapDispatchToProps from '../../redux/action';

const Util = ({
  children, className, utilities, actions, ...rest
}) => {
  let comFirmClassName = styles.confirm;

  if (className) {
    comFirmClassName = `${comFirmClassName} ${className}`;
  }

  const onConfirm = () => {
    utilities.confirm.onConfirm();
    actions.clearConfirm();
  };

  return (
    <>
      {((utilities || {}).confirm || {}).open && (
        <div
          {...rest}
          className={comFirmClassName}
        >
          <div>
            <h3>{utilities.confirm.message}</h3>
            <button
              onClick={onConfirm}
            >
              ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default connect(
  (state) => state,
  mapDispatchToProps,
)(Util);
