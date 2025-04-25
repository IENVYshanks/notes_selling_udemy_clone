import React from 'react'
import { TextField } from '@mui/material'
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from "../contexts/AuthContext";


export default function Login() {

  const navigate= useNavigate();
  
  const handleSignup = ()=>{
          navigate('/Pages/SignUp')
  }

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { user, logIn } = UserAuth();
  const [password, setPassword] = useState('') 
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Perform validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(value)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

    const handleSubmit = async (e) => {
       e.preventDefault();
  setError('');
  setIsLoading(true); // Set loading state to true

  try {
    await logIn(email, password);
    setIsLoading(false); // Reset loading state
    alert('Successfully logged in'); // Display success alert
     navigate('/');
  } catch (error) {
    console.log(error);
    setError(error.message);
    setIsLoading(false); // Reset loading state
  }
  };


  return (
    <div>
      
      <div className='flex flex-col gap-3 justify-center items-center m-auto h-screen'>
        <p className='font-sans font-bold mr-36'>Log into your Udemy account</p>
       <div className='w-[384px] border border-black h-10 p-5 flex items-center font-bold font-sans'>
        <img src="../src/images/google.png" className='object-contain w-7 mr-2 p-0'/>
        Continue with Google
       </div>
       <div className='w-[384px] border border-black h-10 p-5 flex items-center font-bold font-sans'>
        <img src="../src/images/communication_15047435.png" className='object-contain w-7 mr-2 p-0'/>
        Continue with Facebook
       </div>
       <div className='w-[384px] border border-black h-10 p-5 flex items-center font-bold font-sans'>
        <img src="../src/images/apple-logo_747.png" className='object-contain w-7 mr-2 p-0'/>
        Continue with Apple
       </div>
      

        <TextField
          id="outlined-basic"
          type='email'
          label="Email"
          value={email}
          variant="outlined"
          onChange={handleEmailChange}
          error={Boolean(error)}
          helperText={error}
          style={{ width: '384px' }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#000",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2e2e2e",
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "bold",
            },
          }}
          
  
        />

        <TextField
          id="outlined-basic"
          label="Password"
          type='password'
          variant="outlined"
          style={{ width: '384px' }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#000",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2e2e2e",
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#2e2e2e",
              fontWeight: "bold",
            },
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        
    

        <button className='bg bg-purple-600 w-[384px] h-12 font-sans font-bold text-white' onClick={handleSubmit}>
          Login
        </button>
        <span className='text-p text-purple-900 font-bold font-sans underline'> Or Forgot Password</span>
        <hr />
        <p>Don't have an account? <span className='text-p text-purple-900 font-bold font-sans underline' onClick={handleSignup}><button>Sign up</button></span></p>
        <span className='text-p text-purple-900 font-bold font-sans underline'> Log in with your organization</span>

      </div>
    </div>
  )
}
