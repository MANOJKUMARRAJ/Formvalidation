import React, { useContext } from 'react'
import { UserContext } from '../App'

const Grandchild = () => {
  const providercount=useContext(UserContext)
  return(
    <div>
      <h2>Grandchild</h2>
    <h1> value - {providercount.count}</h1></div>
  )
}

export default Grandchild