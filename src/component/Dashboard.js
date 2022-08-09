import React from 'react'
import Main from './Main'
import SideNav from './SideNav'
import {context} from '../Application'

const Dashboard=()=>{
    return (
        <div>
            <h4>Dashboard</h4>
            <context.Consumer>
                {(state)=>{
                    console.log('state',state)
                    return (
                        <>
                        <p>Title is  : {state.title}</p>
                        <p>Username is  : {state.username}</p>
                        <p>Active Profile Id  is :  {state.activeProfileId}</p>
                        </>
                    )
                }}
            </context.Consumer>
            <SideNav/>
            <Main/>
        </div>
    )
}
export default Dashboard