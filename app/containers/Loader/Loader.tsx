import React from 'react';
import LoaderSvg from '../../../resources/loader.svg';

const Loader = () => {
  return (
    <div className="Loader">
      <img src={LoaderSvg} alt="loader" />
    </div>
  );
};

export default Loader;
