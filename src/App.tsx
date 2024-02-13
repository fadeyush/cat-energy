import React from 'react';
import './App.scss';
import MyButton from './components/UI/button/MyButton';
import { buttonTypes } from './types/button';
import PageHeader from './components/PageHeader';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <Router/>
    </div>
  );
}

export default App;
