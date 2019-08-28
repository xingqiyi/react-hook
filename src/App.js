import React from 'react';
import logo from './logo.svg';
import './App.css';

import DataFetch from './components/DataFetch'
import CustomDataFetch from './components/CustomDataFetch'
import ReducerDataFetch from './components/ReducerDataFetch'

function App() {
  return (
    <div className="App">

      <ReducerDataFetch></ReducerDataFetch>

    </div>
  );
}

export default App;
