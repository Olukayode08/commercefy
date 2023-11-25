import React from 'react'
import styled from 'styled-components'

const RegisterPage = () => {
  return (
    <Wrapper>
      <div className='register-page'>
        <form>
          <h1>Register for an account</h1>
          <input
            type='email'
            required
            id='email'
            placeholder='Email address'
            name='email'
          />
          <div>
            <input type='text' required id='otp' placeholder='OTP' name='otp' />
          </div>

          <input
            type='password'
            required
            id='password'
            placeholder='Create Password'
            name='password'
          />
          <input
            type='password'
            required
            id='confirmPassword'
            placeholder='Confirm Password'
            name='confirmPassword'
          />
          <p>
            By signing up, you confirm that you’ve read and accepted our Term of
            use and Privacy Policy
          </p>
          <button>Login</button>
          <p>Already have an account? Log in</p>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .register-page {
    width: 100%;
    height: 100vh;
    background-color: #4f378b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 35%;
    margin: 0 auto;
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
  p {
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    width: 350px;
    margin: 10px 0;
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
export default RegisterPage