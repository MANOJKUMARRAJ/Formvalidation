import React from 'react'
import {context} from '../Application'

const Page =()=>{
    return (
        <div>
            <h4>Profile</h4>
            <context.Consumer>
                {(state)=>{
                    return  <p>Username is  : {state.username}</p>
                        
                    
                }}
            </context.Consumer>
            

        </div>
    )
}
export default Page