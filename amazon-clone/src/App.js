import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/checkout" element={<>
                    <Header/>
                    <Checkout/>
                   </>} />
            <Route path="/login" element={<>
                    <Header/>
                    <Login/>
                    </>}/>
            <Route path="/" element={<>
                    <Header/>
                    <Home/>
                    </>}/>
             
            
            </Routes>
      
        </div>
    </Router>
    
  );
}

export default App;
