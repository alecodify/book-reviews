import { Button, Input } from '../components';
import bgImage from '/bg.png';

const ResetPassword = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} >
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Reset Your Password</h2>
        <form>
          <Input label='Email' name='email' type='email' placeHolder='Enter your email' value={""} onChange={() => { }} classNameLabel='text-white' />

          <div className="mb-6">
            <p className="text-white text-sm">
              Enter the email address associated with your account and we will send you instructions to reset your password.
            </p>
          </div>

          <Button text='Send Reset Link' type='button' onClick={() => { }} className='from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700' />

          <div className="mt-4 text-center">
            <p className="text-white">
              Remembered your password?{' '}<a href="/signin" className="text-blue-300 hover:text-blue-500 font-semibold underline">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword