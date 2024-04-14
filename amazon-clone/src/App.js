import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom"
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/checkout" element=<h1>CheckOut</h1>/>
            <Route path="/login" element=<h1>Login page</h1>/>
            <Route path="/" element=<Header/>/>
             
            
            </Routes>
      
        </div>
    </Router>
    
  );
}

export default App;
