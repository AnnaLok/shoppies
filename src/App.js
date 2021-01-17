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
          <div className='logo' />
          <Button className='center' 
            type='primary' shape='round' 
            onClick={ showDrawer } 
            style={{ float: 'right' }}> 
              View Your Nominations
          </Button>
          <Title className='center' level={ 2 } style={{ color: 'white' }}> The Shoppies </Title>
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

/*
TODO: 
  General
  - Change logo + title
  - Add instructions that you can only nominate 5 movies
  - Do not have inline CSS styling 
  - responsive layout
  MovieCard
  - Title is cut off (try to wrap it) OR hover to expand title in popup OR make a popup (modal)
  - reduce num of args passed
  - (LATER) Nominate/unnominate button doesn't update immediately after removing movie off list. The only time that it works is if 5 are nominated and diableAll is updated
  ListItem
  - set left margin of button to 20 
  - if Title is too long, Meta goes under poster
  - reduce num of args passed

  EXTRA:
  - add modal for more movie details when click on movie 
  - sort by - search results
  - carousel

*/
