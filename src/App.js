import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Card from './components/card.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Form from './pages/form';
import Success from './pages/success';
import { FirebaseContext } from './firebase/firebase';
import { useSelector } from 'react-redux';


function App() {
  
  const { app, api } = useContext(FirebaseContext);
  const foods = useSelector(state => state.foods);

  // useEffect(() => {
  //   api.getFoods();
  // }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/submission' element={<Form/>} />
            <Route path='/success' element={<Success/>} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
