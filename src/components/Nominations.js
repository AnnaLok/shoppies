import { React, useState } from 'react';
// core components
import ListItem from 'components/ListItem.js'
// antd components
import { Col, Drawer } from 'antd';

export default function Nominations({ visible, setVisble, nominationList, removeNom }) { 

  const [update, setUpdate] = useState(false);

  function onClose() {
    setVisble(false);
  };

  return (
    <Drawer
      title={'Your Nominations (' + Object.keys(nominationList).length + ')' }
      placement='right'
      closable={ true }
      onClose={ onClose }
      visible={ visible }
      key={ 'right' }
      width={ 450 }
    >
    <Col gutter={ 16 } type='flex'>
      { nominationList !== null && Object.keys(nominationList).length > 0 
        && Object.entries(nominationList).map(([key, value]) => 
          <ListItem
            Title={ nominationList[key].title }
            Year={ nominationList[key].year }
            Poster={ nominationList[key].poster }
            imdbID={ key }
            removeNom={ removeNom }
            update={ update }
            setUpdate={ setUpdate }
          />
        )
      }
    </Col>
    
    </Drawer>
  );
}

/*

*/