import React, { ReactChildren } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

export default function Spiner({ children, ...rest }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spin {...rest}>{children}</Spin>
    </div>
  );
}

Spiner.defaultProps = {
  children: ReactChildren,
};

Spiner.propTypes = {
  children: PropTypes.element,
};
