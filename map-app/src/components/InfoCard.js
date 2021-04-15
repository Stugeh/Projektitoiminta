import '../App.css';
import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

const Lorem = () => (
  <div className='text'>

    Oulun yliopisto, tämä pohjoinen alma mater,
    on aivan loistava valinta opiskelupaikaksi.
    Etenki se takia, että se on Oulusa.<br/>
    Oulun yliopistossa on kaheksan tiedekuntaa
    ja valtavasti eri oppiaineita, mikä tietenki
    tarkottaa että kavereita riittää.
    <br/>Yliopistolta löytyyki esimerkiksi harrasteporukoita
    vähän joka lajiin. Oulun yliopiston toiminnot on
    melko pitkälti yhen kampuksen alla Linnanmaalla,
    mutta täällä on niin hyvät pyöräbaanat,
    että kannattee ehottomasti tutkia elämää
    myös kampuksen ulukopuolella.

  </div>
);

const InfoCard = () => (
  <div className="info">
    <Tabs defaultActiveKey="Info" className="tabs">
      <Tab eventKey="Info" title="Info">
        <Lorem/>
      </Tab>
      <Tab eventKey="haasteet" title="haasteet">
        <Lorem/>
      </Tab>
    </Tabs>
  </div>
);

export default InfoCard;
