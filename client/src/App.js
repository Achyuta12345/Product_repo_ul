import './App.css';
import React from 'react'

import {BrowserRouter,Link,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AddProductComponent from './components/pages/AddProductComponent';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Route path='/' component={Home} exact></Route>
      <Route path='/product' component={AddProductComponent} exact></Route>
    </BrowserRouter>
    </>
  )
}
