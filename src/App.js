import { React, useState } from 'react';
// antd components
import { Button, Layout, message, Typography } from 'antd';
// core components
import SearchMovies from 'components/SearchMovies.js'
import Nominations from 'components/Nominations.js'
// styling
import './App.css';
import  'antd/dist/antd.css';

export default function App() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  const [nominationList, setList] = useState({});
  const [disableAll, setDisableAll] = useState(false);
  const [visible, setVisble] = useState(false);

  function addNom(Title, Year, Poster, imdbID) {
    setList({
      ...nominationList, 
      [imdbID] : {
        title: Title,
        year: Year,
        poster: Poster
      }
    });
    if (Object.keys(nominationList).length >= 4) {
      setDisableAll(true);
      message.info('You have nominated 5 movies.');
    }
  }

  function removeNom(imdbID) {
    delete nominationList[imdbID];
    setList(nominationList);
    if (Object.keys(nominationList).length < 5) {
      setDisableAll(false);
    }
  }

  function showDrawer() {
    setVisble(true);
  }
  
  return (
    <div className='App'>
      <Layout className='layout'>
        <Header>
          <Button className='right-Header' shape='round' onClick={ showDrawer } > 
              View Your Nominations
          </Button>
          <Title className='vertical-center' level={ 2 } style={{ color: 'white' }}> The Shoppies </Title>
        </Header>
        <Content style={{ margin: '16px 0', padding: '0 50px' }}>
          <div className='site-layout-content'>
            <SearchMovies 
              nominationList={ nominationList } 
              addNom={ addNom } 
              removeNom={ removeNom } 
              disableAll={ disableAll } 
              setDisableAll= { setDisableAll } />
          </div>
        </Content>
        <Footer style={{ textAlign: 'right' }}>The Shoppies ©2021 Created by Anna Lok</Footer>
      </Layout>
      <Nominations 
        visible={ visible } 
        setVisble={ setVisble } 
        nominationList={ nominationList } 
        removeNom={ removeNom } />
    </div>
  );
}
