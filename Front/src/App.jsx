import { useEffect, useState } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Header from './components/Header';
import Quite from './components/Quite';
import Buttons from './components/Buttons';
import Modal from './components/Modal';

function App() {

  return (
    <>
    <div  className='bg-slate-200'>
       <Header /> 
       <Quite /> 
    </div>

    </>
  )
}

export default App
