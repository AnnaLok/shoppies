import { React, useState } from 'react';
// core components
import no_poster from 'assets/no_poster.jpg';
import NominateButton from 'components/NominateButton.js'
import UnnominateButton from 'components/UnnominateButton.js'
// antd components
import { Card, Col, message, Row } from 'antd';

export default function MovieCard({ Title, Year, Poster, imdbID, nominationList, addNom, removeNom, disableAll }) {

  const { Meta } = Card;
  const [nominated, setNominated] = useState(nominationList[imdbID]);

  function nominateHandler() {
    setNominated(true);
    addNom(Title, Year, Poster, imdbID);
  }

  function unnominateHandler() {
    setNominated(false);
    removeNom(imdbID);
  }

  return (
    <Col style={{ margin: '20px 0' }} span={ 4 }>
      <div>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img 
            alt={ Title } 
            src={ Poster === 'N/A' ? no_poster : Poster }
            style={{ width: 200, height: 270 }} />
          }
        >
          <Meta title={ Title } description={ Year } />
          <Row style={{ marginTop: '10px' }}>
            <Col>
              { nominationList[imdbID] ? 
                <UnnominateButton unnominateHandler={ unnominateHandler }/> :
                <NominateButton nominateHandler={ nominateHandler } disableAll={ disableAll } /> 
              }
            </Col>
          </Row>
        </Card>
      </div>
    </Col>  
  );
}
