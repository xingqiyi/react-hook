import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { Router, Route, Link } from 'react-router'
import logo from './logo.svg'
import './App.css'

import DataFetch from './components/DataFetch'
import CustomDataFetch from './components/CustomDataFetch'
import ReducerDataFetch from './components/ReducerDataFetch'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      {/* 添加 exact 属性，否则 / 会被 /users 或者 /users/add */}
      <Route path="/" exact component={DataFetch} />
      <Route path="/a" exact component={DataFetch} />
      <Route path="/b" component={CustomDataFetch} />
      <Route path='/c' component={ReducerDataFetch} />

    </main>
  </div>
)

function App () {
  // return (
  //   <div className="App">
  //     <ReducerDataFetch></ReducerDataFetch>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  )
}

export default App
