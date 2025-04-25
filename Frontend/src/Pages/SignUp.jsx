import React, { useState, useRef } from 'react';
import { TextField } from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignUp() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/Pages/Login');
  };
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

  if (password !== confirmPassword) {
    return setError('Passwords do not match');
  } else {
    setError('');
  }

  try {
    setError('');
    setLoading(true);

    // Check if the user already exists
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    );
    const user = userCredential.user;

    // User creation successful
    setLoading(false);
    console.log('Account created successfully:', user);
  } catch (error) {
    // User creation failed
    setLoading(false);
    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      const errorMessage = 'An account with this email already exists. Try logging in instead.';
      setError(errorMessage);
      window.alert(errorMessage);
    } else {
      const errorMessage = 'Failed to create account!';
      setError(errorMessage);
      window.alert(errorMessage);
    }
  }

 
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 justify-center items-center m-auto h-screen">
          <p className="font-sans font-bold">Sign up and start learning</p>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            inputRef={nameRef}
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
            label="Email"
            variant="outlined"
            value={email}
            inputRef={emailRef}
            onChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
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
            variant="outlined"
            error={Boolean(error) && (password !== confirmPassword)}
            onChange={handlePasswordChange}
            inputRef={passwordRef}
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
            label="Confirm Password"
            variant="outlined"
            error={Boolean(error) && (password !== confirmPassword)}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
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

          <PasswordStrengthBar
            password={password}
            style={{
              width: "200px",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginRight: "170px",
            }}
            scoreWords={["Too weak", "Could be stronger", "Strong Password", "Very Strong"]}
            scoreWordStyle={{ textAlign: "left", textTransform: "capitalize" }}
          />

          <label className="w-72 mr-20">
            <input type="checkbox" className="mr-1" />
            Send me special offers, personalized recommendations, and learning tips.
          </label>
          <button className="bg bg-purple-600 w-[384px] h-12 font-sans font-bold text-white" disabled={loading} onClick={handleSubmit}>
            Sign up
          </button>
          <p className="font-sans text-xs">By signing up, you agree to our Terms of Use and Privacy Policy.</p>
          <hr />
          <p>
            Already have an account?{' '}
            <span className="text-p text-purple-900 font-bold font-sans underline" onClick={handleLogin}>
              <button>Login</button>
            </span>
          </p>
        </div>
      </form>
    </>
  );
}