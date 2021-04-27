import React from 'react';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

const HelpButton = ({onButton}) => {
  return (
    <div className="btn-help">
      <HelpRoundedIcon fontSize="large"
        onClick={onButton} />
    </div>

  );
};

export default HelpButton;
