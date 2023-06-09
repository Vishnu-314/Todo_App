import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
    const [credential,setcredential]=useState({name:"",email:"",password:"",cpassword:""})
    let history=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       const {name,email,password}= credential;
        const response = await fetch("https://todo-server-mvdc.onrender.com/api/auth/createuser", {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name,email,password})
        })
        const json = await response.json()
        console.log(json)
       
            console.log(json.success)
            // localStorage.setItem("token", json.authtoken)
            // console.log(json.authtoken)
            history("/login")
        
    }
    const onChange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="cpassword" className="form-control" id="cpassword" name="password" onChange={onChange} required minLength={5}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
