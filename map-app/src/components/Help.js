import React from 'react';

import {IconButton} from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
const Help = ({showHelp, toggleShowHelp}) => {
  return (
    <>
      {showHelp && <div className="help">
        <IconButton style={{float: 'right'}} onClick={toggleShowHelp}>
          <CloseRoundedIcon/>
        </IconButton>
        <p>
        Hei opiskelija!
          <br /><br />
        Tervetuloa Map-appiin!
          <br /><br />
        Kuten näet, edessäsi on kartta,
        jonne on sijoitettu Oulun parhaat mestat! ;-)
          <br /><br />
        Lähde mukaani tutustumaan näihin upeisiin kohteisiin
        ja suorita jännittävät haasteet.
          <br /><br />
        Klikkaamalla punaisia paikkamerkkejä kartalla voit selata paikkoja
        ja pääset lukemaan kohteen kuvauksen.
          <br /><br />
        Haasteet-välilehdeltä
        pääset ottamaan vastaan paikan tarjoamat jännittävät tehtävät!
        Klikkaamalla checkboxit voit seurata etenemistäsi.
        Jokainen klikkaus
        saa sivun ylälaidassa olevan punaisen palkin kasvamaan.
        </p>
      </div>}
    </>

  );
};

export default Help;
