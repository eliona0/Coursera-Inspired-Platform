import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';

const Login = () => {
  return (
    <div className='login'>
        <div className="login-form">
        <form>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="text" placeholder='name@email.com' />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type="password" placeholder='Enter your password' />
                    <a href="/login" className='fg-a'>Forgot Password?</a>
                </div>
                <div className='form-group'>
                    <button>Login</button>
                </div>

                <div className='form-group space'>
                    <div className='login-alternatives'>
                        <GoogleIcon/> 
                        <a href='/login'>Continue with Google</a>
                    </div>
                </div>

                <div className='form-group space'>
                    <div className='login-alternatives'>
                        <FacebookOutlinedIcon/> 
                        <a href='/login'>Continue with Facebook</a>
                    </div>
                </div>

                <div className='form-group space'>
                    <div className='login-alternatives'>
                        <AppleIcon/> 
                        <a href='/login'>Continue with Apple</a>
                    </div>
                </div>
            </form>
            </div>
    </div>
  )
}

export default Login