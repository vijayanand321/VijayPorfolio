import { useState } from "react"
import "./Form.css"
import React from 'react'

const Form = () => {
  const[userData ,setUserData] =useState({
    name:"",
    email:"",
    subject:"",
    msg:"",
  });
  
  const {name,email,subject,msg} =userData;
  const postUserData=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const submitData= async (e)=>{
   e.preventDefault();
   const {name,email,subject,msg} =userData;
   if(name&&email&&subject&&msg){
   const res = await fetch('https://vijayanand321portfolio-default-rtdb.firebaseio.com/userDatabase.json',
   {
   method:'POST',
   headers :{
       "Content-Type" : 'application/json',
   },
   body : JSON.stringify({
    name,email,subject,msg,
   }),
  }
   );
   if(res.ok){
    setUserData({
      name: "",
      email: "",
      subject:"",
      msg:"",
    })
    alert("Thank you for contacting me");
   }
   else {
    alert('please fill all fields')
   }
  }
else alert("please fill the data")
  }

  return (
    <div className="form">
        <form method="post">
            <label htmlFor="">Your Name</label>
            <input type="text"  value={name} name="name" onChange={postUserData}/>
            <label htmlFor="">E-mail</label>
            <input type="email" value={email} name="email" onChange={postUserData} />
            <label htmlFor="">Subject</label>
            <input type="text"  value={subject} name="subject" onChange={postUserData}/>
            <label htmlFor="">Message</label>
            <textarea rows="6" placeholder="type your message here" value={msg} name="msg" onChange={postUserData}></textarea>
            <button className="btn" onClick={submitData}>SUBMIT</button>
        </form>

    </div>
  )
}

export default Form