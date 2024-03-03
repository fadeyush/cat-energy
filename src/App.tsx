import React from 'react';
import './App.scss';
import Router from './components/Router';
import PageHeaderNavigation from './components/PageHeaderNavigation';
import Footer from './components/Footer';
import { useResize } from './hooks/useResize';
import { useDispatch } from 'react-redux';

function App() {
  const deviceSize: number = useResize();
  const dispatch = useDispatch();
  
  dispatch({type: "ADD_SIZE", payload: deviceSize});

  return (
    <div className="App">
      <PageHeaderNavigation/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
