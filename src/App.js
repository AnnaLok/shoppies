import { React, useState } from "react";
// antd components
import { Layout } from 'antd';
// core components
import SearchMovies from 'components/SearchMovies.js'
// styling
import './App.css';
import  'antd/dist/antd.css';

export default function App() {
  const { Header, Content, Footer } = Layout;

  const [nominationList, setList] = useState({});
  const [disableAll, setDisableAll] = useState(false);

  function addNom(Title, Year, Poster, imdbID) {
    setList({
      ...nominationList, 
      [imdbID] : {
        title: Title,
        year: Year,
        poster: Poster
      }
    });
  }

  function removeNom(imdbID) {
    delete nominationList[imdbID];
    setList(nominationList);
    if (Object.keys(nominationList).length < 5) {
      setDisableAll(false);
    }
  }
  
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <h1 style={{ color: 'white' }}> The Shoppies </h1>
        </Header>
        <Content style={{ margin: '16px 0', padding: '0 50px' }}>
          <div className="site-layout-content">
            <SearchMovies nominationList={nominationList} addNom={addNom} removeNom={removeNom} disableAll={disableAll} setDisableAll={setDisableAll}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'right' }}>The Shoppies ©2021 Created by Anna Lok</Footer>
      </Layout>
    </div>
  );
}

