import React from 'react';
import './App.scss';
import Router from './components/Router';
import PageHeaderNavigation from './components/PageHeaderNavigation';

function App() {
  return (
    <div className="App">
      <PageHeaderNavigation/>
      <Router/>
    </div>
  );
}

export default App;
