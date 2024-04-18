import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider';
import { auth } from './components/firebases'


function App() {
   const [{user}, dispatch] = useStateValue()
   
   useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //the user is logged in...

        dispatch({
          type:'SET_USER',
          user:authUser
        })
      } else {
        //the user is logged out....
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

       return () => {
        unsubscribe();
       }
   },[])


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
