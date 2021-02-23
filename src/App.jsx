import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Bootstrap/bootstrap.css';
import './Bootstrap/bootstrap.min.css.map';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import DependentSelectExample from './components/DependentSelectExample/DependentSelectExample';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route path="/icecream">
                <Layout>
                <Header></Header>
                <Body></Body>
                <Footer></Footer>

            </Layout>
          </Route>
          <Route>
              <DependentSelectExample></DependentSelectExample>
          </Route>
          
          
        </Switch>
      </div>
    </Router>

  );
};

export default App;
