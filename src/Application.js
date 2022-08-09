import {React,createContext} from 'react'
import Dashboard from './component/Dashboard'
import './App.css';

const context=createContext()

const Application =()=>{
    const state={
        title : 'Rohit Sharma',
        username :'Gurnath',
        activeProfileId : '45',

    }
    return (
        <div className='taskt'>
            <context.Provider value={state}>
                <Dashboard />
            </context.Provider>
        </div>
    )
}
export default Application
export {context}