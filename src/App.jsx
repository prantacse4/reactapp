import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import  './Bootstrap/bootstrap.css';
import  './Bootstrap/bootstrap.min.css.map';
import DependentSelectExample from "./components/DependentSelectExample/DependentSelectExample";
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudHome from "./components/CRUDAPP/CrudHome";
import ImsAppHome from "./components/IMSAPP/ImsAppHome";


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
                    <Route path='/DependentSelectExample' component={DependentSelectExample}/>
                    <Route path='/CrudHome'>
                        <CrudHome></CrudHome>
                    </Route>

                    <Route path='/ImsApp'>
                        <ImsAppHome></ImsAppHome>
                    </Route>
                    
                    
                    
                </Switch>
            </div>
        </Router>
    );
}

export default App;
