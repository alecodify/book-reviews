import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Error } from '../components';
import { SignInProps } from '../type';
import bgImage from '/bg.png';
import * as api from '../api';

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async () => {

    if (email === "" || password === "") {
      setError("All Fields are Required!");
      return;
    }

    const data: SignInProps = {
      email,
      password,
    }

    try {
      const response = await api.login(data);

      if (response.status === "Success") {
        localStorage.setItem('userId', response.user._id);
        navigate('/browser')
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

  }

  return (
    <div className='relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='absolute inset-0 bg-black opacity-60' />
      <div className='relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-2xl md:text-3xl font-bold text-center text-white mb-6'>Login to your Account</h2>
        <form>
          {error && <Error error={error} status='failed' />}
          <Input value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeHolder='Enter your email' type='email' label='Email' classNameLabel='text-white' />
          <Input value={password} name='password' onChange={(e) => setPassword(e.target.value)} placeHolder='Enter your password' type='password' label='Password' classNameLabel='text-white' />
          <Button text='Login' type='button' onClick={onSubmit} className='from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700' />
          <div className='text-center mt-4 text-sm flex flex-col gap-2'>
            <p className='text-white'>Don't have an account?{" "}<Link to="/signup" className='text-blue-300 hover:text-blue-500 font-semibold underline'>Sign Up</Link></p>
            <p className='text-white'>Forgot your password?{" "}<Link to="/reset-password" className='text-blue-300 hover:text-blue-500 font-semibold underline'>Reset</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn