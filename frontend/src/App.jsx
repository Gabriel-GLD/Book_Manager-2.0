import { 
  useEffect, 
  useState 
} from 'react';


import './App.css';
import Inputs from './components/Inputs';
import Header from './components/Header';
import Quite from './components/Quite';
import Buttons from './components/Buttons';
import Modal from './components/Modal';

function App() {

  return (
    <>
      <div  className='min-h-screen w-full bg-slate-300'>
        <Header />   
        <Quite /> 
        
      </div>
  
    </>
  )
}

export default App
