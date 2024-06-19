import React, { useEffect, useState } from 'react'
import {useAuth} from './Auth'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Login = () => {
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [userlist,setUserList]=useState('')
    useEffect(()=>{
        alert("login first")
        axios.get('http://localhost:3001/users')
        .then(res=>setUserList(res.data))
        .catch(err=>console.log(err))
    },[])
    const auth=useAuth()
    const handlelogin=(e)=>{
        e.preventDefault()
        const userExit=userlist.some(u=>u.username===username && u.password===password)
        if(userExit){
            auth.login(username)
            navigate('/bmi')
        }else{
            alert("Invalid User or Password")
        }
    }

  return (
    <div>
        <h1 style={{ textAlign: 'center', textDecoration: 'underline dotted' }}>Login page</h1>
        <form onSubmit={handlelogin}>
            <label>Username:</label>
            <input type='text' value={username} onChange={(e)=>{
                setUsername(e.target.value)}}/>
            <br></br>
            <br></br>
            <label>password:</label>
            <input type='password' value={password} onChange={(e)=>{
                setPassword(e.target.value)}}/>
        <br></br>
        <br></br>
        <button type='submit'>Login</button><br></br>
        <br></br>
        
        <Link className='flink' to="/signup">don't have an account? signup</Link><br></br>
        {/* <Link className='flink' to='/bmi'>IBM Calcutale</Link> */}
        </form>

        <br></br><br></br>
      <footer>
        <h1 id="fbf">Contact us</h1>
        <div className="footer">
        <div className="foot1"> <FontAwesomeIcon icon={faFacebook} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faInstagram} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faTwitterSquare} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faYoutube} /> </div>
        </div>
        <h3 id="fbf">All copyright are reserved@2024</h3>
      </footer>
    </div>
  )
}
