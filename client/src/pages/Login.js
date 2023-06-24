import '../App.css';
import {useState} from 'react';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function loginUser(event){
    event.preventDefault();
 const response = await fetch('http://localhost:5000/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email, 
        password
      }),
    })

    const data = await response.json();
    if(data.user){
      alert('Login Successful');
      window.location.href = './quote'
    }else{
      alert("plz check email and password");
    }
  }
  return (
    <div>
      <h1>Login Form</h1>
        <form onSubmit={loginUser}>
          <input value={email} type="email" placeholder="Email-id" onChange={(e)=>setEmail(e.target.value)}/>
          <br/>
          <input value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> 
          <br/>
          <input type="submit" value="Login"/>
        </form>
    </div>
  );
}

export default Login;  
