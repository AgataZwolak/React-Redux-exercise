import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import EditForm from './components/users/EditForm'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/editform/:id' component={EditForm} />
        <Route render={() => <Home/>}/>
      </Switch>
    </Router>
  );
}

export default App;
