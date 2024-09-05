import React ,{useState, useContext}from 'react'
import UserContext from '../context/UserContext'



function SignIn() {

    const[Name,setName]=useState('')
    const[Pass,setPass]=useState('')
const[setUser]=useContext(UserContext)

const handleSubmit=() =>{
    e.preventDefault()
    setUser({Name,Pass})

}
  return (
    <div>
      <h2>SignIn</h2>
      <input type='text'
      value={Name}
      onChange={(e)=>setName(e.target.value)}
      placeholder='Name'/>
      <input type='text'
       value={Pass}
       onChange={(e)=>setPass(e.target.value)}
      
      placeholder='Pass'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SignIn
