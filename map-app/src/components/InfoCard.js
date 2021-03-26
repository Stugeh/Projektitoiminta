import '../App.css';
import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

const Lorem = () => (
  <div>
    <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce placerat pulvinar quam id suscipit. Nunc erat sem,
        mattis in massa ut, posuere consectetur sapien.
        Aliquam pharetra odio eu bibendum dapibus.
        Fusce sapien nisl, facilisis non rhoncus eget,
        tempus nec eros. Donec hendrerit bibendum felis,
        quis condimentum mi bibendum vitae.
        Nam interdum mauris et laoreet vulputate.
        Sed gravida ut odio luctus fringilla.
  </div>
);

const InfoCard = () => (
  <div className="info">
    <h1>Place</h1>
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
