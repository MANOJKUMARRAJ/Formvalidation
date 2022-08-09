import {React,useContext} from 'react'
import Grandchild from './Grandchild'
import {UserContext} from '../App'

const Child=()=> {
  let providercount = useContext(UserContext)
  const Updatevalue=()=>{
    if(providercount.count === 10)
    {
      providercount.setCount(0)
    }
    else{
      providercount.setCount(providercount.count+1)
    }
   
    

    
  }
  return (
    <div>
       
      
       <h2>Child</h2>
      <button onClick={Updatevalue}>Update Value</button>
      <Grandchild/>
     
    </div>
  )
}

export default Child