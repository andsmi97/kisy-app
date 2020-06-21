import React from 'react';
import Loader from '../Loader/Component';

const WithSpinner = (WrappedComponent: any): any => {
  const Spinner = ({ isLoading, ...otherProps }: any): any => {
    return isLoading ? <Loader /> : <WrappedComponent {...otherProps} />;
  };
  return Spinner;
};

export default WithSpinner;
