import React from 'react'
import {context} from '../Application'
import Page from './page'
import TopNav from './TopNav'

const Main =()=>{
    return (
        <div>
            <h4>main</h4>
            <context.Consumer>
                {(state)=>{
                    return (
                        <>
                        <p>Title is  : {state.title}</p>
                        <p>Username is  : {state.username}</p>
                        </>
                    )
                }}
            </context.Consumer>
            <TopNav/>
            <Page/>

        </div>
    )
}
export default Main