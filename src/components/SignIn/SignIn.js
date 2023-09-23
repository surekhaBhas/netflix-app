import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './SignIn.css';

import axios from 'axios';

function SignIn() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const userRef = useRef(null); // Initialize with null
  const errRef = useRef(null); // Initialize with null

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    // Check if the refs are defined before trying to focus
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5500/login',
        JSON.stringify({ password, email }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;

      setAuth({ password, email, accessToken });

      setPassword('');
      setEmail('');
      setErrMsg('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password or Email');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      // Check if the errRef is defined before trying to focus
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  return (
    <div className='bg-container'>
      <div className='registerForm'>
        <form onSubmit={handleSubmit}>
          <p style={{ color: 'red', textAlign: 'center' }}>{errMsg}</p>
          <div className='input-box'>
            <label>Email:</label>
            <input
              type='email'
              ref={userRef}
              required
              placeholder='Enter Your email'
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input-box'>
            <label>Password:</label>
            <input
              type='password'
              required
              placeholder='Enter Your password'
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='submit'>LogIn</button>
        </form>
        <p className='link-para'>
          <em>Don't have an account?</em> <span className='link'><Link to='/signUp'>Sign up</Link></span>{' '}
        </p>
      </div>
    </div>
  );
}

export default SignIn;
