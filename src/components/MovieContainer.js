import { React, useState } from "react";
// core components
import no_poster from 'assets/no_poster.jpg';
import NominateButton from 'components/NominateButton.js'
import UnnominateButton from 'components/UnnominateButton.js'
// antd components
import { 
  Card,
  Col,
  Row 
} from 'antd';

export default function MovieContainer({Title, Year, Poster, imdbID, nominationList, addNom, removeNom, setDisableAll, disableAll}) {

  const { Meta } = Card;
  const [nominated, setNominated] = useState(nominationList[imdbID]);

  function nominateHandler() {
    if (Object.keys(nominationList).length >= 4) {
      setDisableAll(true);
    }
    setNominated(true);
    addNom(Title, Year, Poster, imdbID);
  }

  function unnominateHandler() {
    setNominated(false);
    removeNom(imdbID);
  }

  /*
  TODO: 
  - change colour or unnominate button
  BUGS:
  - if nominated, after search somethign else, it turns to nominate button again
  - if 5 nominated, search something else, it is all disabled + nominate (should be unnominate)

  nominate => search different => go back => unnominate (this doesn't update the button to nominate)
    This code below gives blank screen:
    if (nominationList[imdbID]) {
      setNominated(true);
    }
  */

  return (
    <Col style={{ margin: '20px 0'}} className = "gutter-row" span={4}>
      <div>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ 
          <img alt={Title} 
            src={Poster === 'N/A' ? no_poster : Poster} 
          />
        }
        >
          <Meta title={Title} description={Year} />
          <Row style={{marginTop: '10px'}}>
            <Col> <div>{nominated ? "YES" : "NO"}</div>
              {nominationList[imdbID] ? 
                <UnnominateButton unnominateHandler={unnominateHandler}/> :
                <NominateButton nominateHandler={nominateHandler} disableAll={disableAll} /> 
              }
            </Col>
          </Row>
        </Card>
      </div>
    </Col>  
  );
}
