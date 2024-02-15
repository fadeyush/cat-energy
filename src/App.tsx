import React from 'react';
import './App.scss';
import Router from './components/Router';
import PageHeaderNavigation from './components/PageHeaderNavigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <PageHeaderNavigation/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
