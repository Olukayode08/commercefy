import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Wrapper>
        <div className='login-page'>
          <form onSubmit={submitForm}>
            <h1>Login to your account</h1>
            <input
              type='email'
              required
              id='email'
              placeholder='E-mail address'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='input'>
              <input
                className='otp-input'
                type='text'
                inputmode='numeric'
                required
                id='otp'
                placeholder='OTP'
                name='otp'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <p className='get-otp'>GET OTP</p>
            </div>
            <input
              type='password'
              required
              id='password'
              placeholder='Password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <div className='remember'>
              <input
                className='radio-btn'
                type='checkbox'
                name='remember_user'
                id='remember_user'
              />
              <h5>Remember me</h5>
            </div> */}
            <button>Login</button>
            <NavLink to='/sign-up' className='link'>
              Don't have an account? Sign up
            </NavLink>
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
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 40%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px 20px;
  }
  .input,
  input {
    width: 400px;
    height: 58px;
    margin: 15px auto;
    border-radius: 8px;
    background: #f5f0ff;
    outline: none;
    border: none;
    padding: 12px 0 12px 20px;
    font-family: inherit;
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .otp-input {
    width: 300px;
    padding: 12px 0 12px 0;
  }
  .get-otp {
    width: 120px;
    color: #4f378b;
    font-weight: 500;
    cursor: pointer;
  }

  .remember {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 400px;
    height: 40px;
    margin: auto;
  }
  .radio-btn {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
  h5 {
    font-weight: 300;
  }
  .link,
  p {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
  .link {
    text-decoration: none;
  }
  button {
    width: 410px;
    height: 58px;
    background-color: #4f378b;
    color: #fff;
    outline: none;
    border-radius: 10px;
    border: none;
    margin: 25px auto;
    font-size: 15px;
    padding: 12px 16px;
  }
  @media screen and (max-width: 1200px) {
    form {
      width: 50%;
    }
  }

  @media screen and (max-width: 900px) {
    form {
      width: 70%;
    }
  }

  @media screen and (max-width: 600px) {
    form {
      width: 90%;
    }
  }
  @media screen and (max-width: 450px) {
    .input,
    input {
      width: 300px;
    }
    .otp-input {
      width: 180px;
    }
    .get-otp {
      width: 120px;
    }
    button {
      width: 310px;
    }
    p {
      width: 250px;
    }
    .login-page {
      height: 120vh;
    }
    form {
      height: 100vh;
    }
  }
  @media screen and (max-width: 370px) {
    .input,
    input {
      width: 280px;
    }
    .otp-input {
      width: 180px;
    }
    .get-otp {
      width: 100px;
    }
    .links {
      width: 280px;
    }
    button {
      width: 290px;
    }
    h1 {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 320px) {
    form {
      height: 100vh;
      width: 100%;
    }
  }
`
export default LoginPage
