import '../App.css';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
 
  async function registerUser(event){
    event.preventDefault();
 const response = await fetch('http://localhost:5000/api/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        name,
        email,
        password
      }),
    })

    const data = await response.json();
    if(data.status === 'ok'){
      navigate.push('/login');
    }
  }
  return (
    <div>
      <h1>Registration form</h1>
        <form onSubmit={registerUser}>
          <input value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
          <br/>
          <input value={email} type="email" placeholder="Email-id" onChange={(e)=>setEmail(e.target.value)}/>
          <br/>
          <input value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> 
          <br/>
          <input type="submit" value="register"/>
        </form>
    </div>
  );
}

export default Register;
