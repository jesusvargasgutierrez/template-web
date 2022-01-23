import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Headerx from './components/headerx';
import Headery from './components/headery';
import Navigation from './components/navigation';
import Cover from './components/cover';
import Body from './components/body';
import FirstSection from './components/first_section';
import React, { Component, useReducer, useState } from 'react';
import { TYPES } from "./actions/appactions";
import { shoppingInitialState, Count, Addcart } from "./reducers/actionsapp";

function App() {
  const { counter , incrementa } = Count();

  const { cart , add } = Addcart([]);

  return (
    <div className="App">
      <Headerx counter={ counter }/>
      <Cover />
      <Body count={ incrementa } products={ shoppingInitialState } items={cart} create={add} />
    </div>
  )
}

export default App;
