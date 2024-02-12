import React from 'react';
import './App.scss';
import MyButton from './components/UI/button/MyButton';
import { buttonTypes } from './types/button';

function App() {
  return (
    <div className="App">
      <MyButton className='exampe' colorType={buttonTypes.green}>Click</MyButton>
    </div>
  );
}

export default App;
