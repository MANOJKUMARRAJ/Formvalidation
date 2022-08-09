import React from 'react'
import {context} from '../Application'

const TopNav =()=>{
    return (
        <div>
            <h4>TopNav</h4>
            <context.Consumer>
                {(state)=>{
                    return  <p>Title is  : {state.title}</p>
                        
                    
                }}
            </context.Consumer>
            

        </div>
    )
}
export default TopNav