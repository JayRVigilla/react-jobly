import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';

function App() {
  const [userToken, setUserToken] = useState(localStorage._token);

  useEffect(() => {
    // setUserToken(localStorage.getItem("_token"));
    localStorage._token ? setUserToken(localStorage.getItem("_token")) : setUserToken("");
  }, [userToken]);


  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
