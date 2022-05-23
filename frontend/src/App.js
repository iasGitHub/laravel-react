import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Idee from './pages/Idee';
import AjoutIdee from './pages/AjoutIdee';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" component={Idee} />
            <Route exact path="/ajout-idee" component={AjoutIdee} />
        </Routes>
    </Router>
  );
      
}

export default App;
