import logo from './logo.svg';
import './App.css';
import './css/styleadmin.css';
import './css/styleadmin2.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Body from './components/body';
import Listcart from './components/Listcart';
import Product from './components/Product';
import Home from './components/Home';
import Dashboard from './components/admin/Home';
import FirstSection from './components/first_section';
import React, { Component, useReducer, useState } from 'react';
import { shoppingInitialState, Count, Addcart } from "./reducers/actionsapp";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const { counter , incrementa } = Count();

  const { cart , add } = Addcart([]);

  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={
          <Body count={ incrementa } products={ shoppingInitialState } items={cart} create={add} />
        }/>
        <Route path="/listcart" element={
            <Listcart items={cart}/>
        }/>
        <Route path="/product/:id_product" element={<Product />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
  )
}

export default App;
