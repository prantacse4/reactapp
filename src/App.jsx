import React from 'react';
import './Bootstrap/bootstrap.css';
import './Bootstrap/bootstrap.min.css.map';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

function App() {
  return (
      <Layout>
          <Header></Header>
          <Body></Body>
          <Footer></Footer>

      </Layout>
  );
}

export default App;
