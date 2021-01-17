import React from 'react';
// antd components
import { Button } from 'antd';

export default function NominationButton({ nominateHandler, disableAll }) {
  return (
    <Button 
      type='primary' 
      shape='round' 
      disabled={ disableAll } 
      style={{ width:150 }} 
      onClick={ nominateHandler }> 
        Nominate
    </Button>
  );
}