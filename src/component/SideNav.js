import React from 'react'
import {context} from '../Application'

const SideNav=()=>{
    return(
        <div>
            <h4>SideNav</h4>
            <context.Consumer>
                {(state)=>{
                    return <p>The Active Profile Id : {state.activeProfileId}</p>
                }
                }
            </context.Consumer>

        </div>
    )
}
export default SideNav