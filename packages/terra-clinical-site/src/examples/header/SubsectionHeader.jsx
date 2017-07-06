import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const SubsectionHeader = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" style={{ margin: '0 10px 0 0' }} /></div>}
      title="Default Header"
      endContent={<div><Button text="Button" style={{ margin: '0 0 0 10px' }} /></div>}
      isSubsection
    />
  </div>
);

export default SubsectionHeader;
