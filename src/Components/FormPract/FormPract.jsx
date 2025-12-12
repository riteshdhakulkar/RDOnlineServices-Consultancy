import React, { useState } from 'react'

const FormPract = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=usePhone=("")
    const[role, setRole]=useRole=("")
    const[password, setPassword]=("")
  return (
    <div>
<form action="">
    <label htmlFor="">enter name</label> <br />
    <input type="text" /> <br /> <br />
    <label htmlFor="">enter email</label> <br />
    <input type="email" /> <br />\ <br />
    <label htmlFor="">enter number</label> <br />
    <input type="number" /> <br /><br />
    <label htmlFor="">enter role</label> <br />
    <input type="text" /><br /> <br />
    <label htmlFor="">enter password</label> <br />
    <input type="password" /> <br /> <br />
</form>
    </div>
  )
}

export default FormPract
