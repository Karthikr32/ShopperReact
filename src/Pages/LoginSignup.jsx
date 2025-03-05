import React, { useRef, useState } from 'react'
import './CSS/LoginSignup.css';

function LoginSignup() {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const HandleLogin = () => {
    if(name && mail && pass) {
      alert('Login Successfully');
    }
    else {
      alert('Please fill the inputs')
    }
    setMail('');
    setName('');
    setPass('');
  }

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-sign-fields">
          <input type="text" name="" id="username" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" name="" id="usermail" placeholder='Your Email Id' onChange={(e) => setMail(e.target.value)} value={mail} />
          <input type="password" name="" id="userpass" placeholder='Your Password' onChange={(e) => setPass(e.target.value)} value={pass} />
          <button onClick={HandleLogin}>Continue</button>
          <p className="login-signup-login">
            Already have an account?
            <span> Login here</span>
          </p>
          <div className="login-signup-agree">
              <input type="checkbox" name="" />
              <p>By continuing, I agre to the terms of use & policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
