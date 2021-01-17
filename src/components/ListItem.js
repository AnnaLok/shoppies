import { React } from 'react';
// core components
import no_poster from 'assets/no_poster.jpg';
import UnnominateButton from 'components/UnnominateButton.js'
// antd components
import { Card, Col, Row } from 'antd';

export default function MovieCard({ Title, Year, Poster, imdbID, removeNom, update, setUpdate}) {

  const { Meta } = Card;

  function unnominateHandler() {
    removeNom(imdbID);
    setUpdate(!update);
  }

  return (
    <Col style={{ margin: '20px 0' }} span={ 4 }>
      <div>
        <Card hoverable style={{ width: 400 }}>
          <Row>
            <img alt={ Title } 
              src={ Poster === 'N/A' ? no_poster : Poster } 
              style={{ width: 125, height: 170 }} />
              <div>
              <Col>
                <Meta title={ Title } description={ Year } style={{ margin: 20 }} />
                <UnnominateButton unnominateHandler={ unnominateHandler } /> 
              </Col>
              </div>
          </Row>
        </Card>
      </div>
    </Col>  
  );
}
