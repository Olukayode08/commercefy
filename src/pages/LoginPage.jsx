import React from 'react'
import styled from 'styled-components'

const LoginPage = () => {
  return (
    <>
      <Wrapper>
        <div className='login-page'>
          <form>
            <h1>Login to your account</h1>
            <input
              type='email'
              required
              id='email'
              placeholder='Email address'
              name='email'
            />
            <div>
              <input
                type='text'
                required
                id='otp'
                placeholder='OTP'
                name='otp'
              />
            </div>

            <input
              type='password'
              required
              id='password'
              placeholder='Create Password'
              name='password'
            />
            <div className='remember'>
              <input className='radio-btn' type='checkbox' name='remember_user' id='remember_user' />
              <p>Remember me</p>
            </div>
            <button>Login</button>
            <p>Don't have an account? Sign in</p>
          </form>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #4f378b;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 35%;
    margin: auto;
    background-color: #fff;
    padding: 20px;
    border: 1px solid green;
  }
  input {
    width: 400px;
    height: 50px;
    margin: 15px;
    padding-left: 20px;
    border-radius: 8px;
    background: #f5f0ff;
    outline: none;
    border: none;
  }
  .remember {
    display: flex;
    width: 200px;
    height: 40px;
    justify-content: left;
    align-items: center;
    border: 1px solid green;
    padding: 0;
    margin: 10px 0;
  }
  .radio-btn {
    width: 20px;
    height: 20px;
  }
  p {
    font-size: 14px;
    line-height: 16px;
  }
  button {
    width: 410px;
    height: 50px;
    background-color: #4f378b;
    color: #fff;
    outline: none;
    border-radius: 10px;
    border: none;
    margin: 15px 0;
  }
`
export default LoginPage