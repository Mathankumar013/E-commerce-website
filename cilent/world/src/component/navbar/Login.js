import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from './action';
import './Login.css'; 
import { FormControl } from 'react-bootstrap';
import Axios from 'axios';

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();  
    Axios.post("http://localhost:3004/createUser", {
      username,  
      password,
    })
    .then((res) => {
      console.log({username,password}); 
    })
    .catch((err) => {
      console.error("Error creating user:", err);
    });
  
    if (username && password) {
      dispatch(login({ username }));
      setUsername("");
      setPassword("");
    }
  };
  

  return (
    <section className="login-container">
      <section className='box'>
        <h2 className='topic'>Login</h2>
        <form onSubmit={loginUser} className='custom-form'>
          <table>
            <tbody>
              <tr>
                <td>USERNAME</td>
              </tr>
              <tr>
                <td><FormControl type="text" placeholder="Username" value={username} className='input-text' onChange={(e) => setUsername(e.target.value)} /></td>
              </tr>
              <tr>
                <td>PASSWORD</td>
              </tr>
              <tr>
                <td><FormControl type="password" placeholder="Password" value={password} className='input-text' onChange={(e) => setPassword(e.target.value)} /></td>
              </tr>
              <tr></tr>
              <tr>
                <td><button type="submit" className='custom-button'>Login</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    </section>
  );
}

export default Login;
