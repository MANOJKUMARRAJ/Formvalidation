
import React,{useState,createContext} from 'react'
import './App.css';
import Formvalidation from '../src/component/Formvalidation'
import Parent from './component/Parent';
import Application from './Application';
import Uncontrolledvalidation from './component/Uncontrolledvalidation';


const UserContext=createContext()

function App() {
  const [count,setCount]=useState(0)
  const providercount={count,setCount}

  return (
    <div className="App">
     <div >
      <div>
      
    
    <Formvalidation/>
  
    
    </div>
    <div ><Uncontrolledvalidation/></div>
    </div>
    <div className='thrfl'>
      <div className='flone'><UserContext.Provider value={providercount} >
      <div id='taskf'>  
    <h2>App</h2>
    <Parent/></div>
  
    
    </UserContext.Provider></div>
    <div className='fltwo'><Application/></div>
    </div>
  
    
    
    </div>
  );
}

export default App;
export {UserContext}