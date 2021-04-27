import React from 'react';

const Help = ({showHelp}) => {
  return (
    <>
      {showHelp && <div className="help">
        <p>Help me use this awesome software..</p>
      </div>}
    </>

  );
};

export default Help;
