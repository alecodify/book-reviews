import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Error } from '../components';
import { SignUpProps } from '../type';
import * as api from '../api';

import bgImage from '/bg.png';

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async () => {

    if (name === "" || email === "" || password === "") {
      setError("All fields are required.");
      return;
    }

    const data: SignUpProps = {
      username: name,
      email,
      password,
    }

    try {
      const response = await api.register(data);

      if (response.status === "Success") {
        navigate('/signin');
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className='relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='absolute inset-0 bg-black opacity-60' />
      <div className='relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-2xl md:text-3xl font-bold text-center text-white mb-6'>Create an Account</h2>
        <form>
          {error && <Error error={error} status='failed' />}
          <Input value={name} name='username' onChange={(e) => setName(e.target.value)} placeHolder='Enter your username' type='text' label='Name' classNameLabel='text-white' />
          <Input value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeHolder='Enter your email' type='email' label='Email' classNameLabel='text-white' />
          <Input value={password} name='password' onChange={(e) => setPassword(e.target.value)} placeHolder='Enter your password' type='password' label='Password' classNameLabel='text-white' />
          <Button text='Sign Up' type='button' onClick={onSubmit} className='from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700'/>
          <Button text='Back' type='button' className="mt-4 bg-green-500 hover:bg-green-500" onClick={() => {navigate('/')}} />
          <div className='text-center mt-4 text-sm'>
            <p className='text-white'>Already have an account{" "}<Link to="/signin" className='text-blue-300 hover:text-blue-500 font-semibold underline'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp