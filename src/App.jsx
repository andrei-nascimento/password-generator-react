import './App.css'
import React from 'react';
import { useState } from 'react';
import { Slider } from '@mui/material';

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_-+={[}]|:<>?/";

function App() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(10);

  function generatePass() {
    let pass = '';
    for(let i = 0, n = characters.length; i < size; i++) {
      pass += characters.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }

  function copyPress() {
    navigator.clipboard.writeText(password);
    alert('Password successfully copied!');
  }
  
  return (
    <div className="app-container">

      <p className='title1'>Generate a</p>
      <p className='title2'>random password</p>
      <p className='subtitle'>Never use an insecure password again.</p>
      <p className='num-char'>{size} Characters</p>

      <Slider 
        size="small"
        min={5}
        max={15}
        value={size}
        onChange={e => setSize(e.target.value)}
      />

      <div className='btn-generate'>
        <button className='btn-generate-text' onClick={generatePass}>Generate password</button>
      </div>

      {password !== '' && (
        <>
        <div className='line'></div>
        <div className='btn-password'>
          <p className='btn-password-text'>{password}</p>
          <button className='btn-copy' onClick={copyPress}>Click to Copy</button>
        </div>
        </>
      )}

    </div>
  )
}

export default App
