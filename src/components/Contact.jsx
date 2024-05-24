import React from 'react'
import { useState } from 'react'
export function Contact(){
    
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [comment,setComment] = useState("")

    function handleSubmit(){
        return(
            <a>You have succesfully submitted</a>
        )
    }
    
    return(
        <>
        <h1>Contact us below</h1>
        <input onChange={(e) => setName(e.target.value)} placeholder='Name'/>
        <input onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input onChange={(e) => setComment(e.target.value)} placeholder='Question/Comment'/>
        <button onClick={() => handleSubmit()}>Submit</button>
        </>
    )
}  