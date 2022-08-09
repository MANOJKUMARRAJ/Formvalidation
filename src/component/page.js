import React from 'react'
import {context} from '../Application'
import Profile from './profile'

const Page =()=>{
    return (
        <div>
            <h4>Page</h4>
            <context.Consumer>
                {(state)=>{
                    return  <p>username is  : {state.username}</p>
                        
                    
                }}
            </context.Consumer>
            <Profile />
            

        </div>
    )
}
export default Page