import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <>
      <FontAwesomeIcon icon={faSpaceShuttle} size="6x" className="pulse" />
    </>
  );
}

export default Loader;
