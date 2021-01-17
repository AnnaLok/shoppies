import React from "react";
// antd components
import { Button } from 'antd';

export default function UnnominationButton({unnominateHandler}) {
  return (
    <Button 
      type="primary" 
      shape="round" 
      style={{width:150}} 
      onClick={unnominateHandler}
      ghost> 
        Unnominate
    </Button>
  );
}