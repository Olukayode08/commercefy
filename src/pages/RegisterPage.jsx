import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const RegisterPage = () => {
   const [email, setEmail] = useState('')
   const [createPassword, setCreatePassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
    const submitForm = (e) => {
      e.preventDefault()
    }
  return (
    <Wrapper>
      <div className='register-page'>
        <form onSubmit={submitForm}>
          <h1>Register for an account</h1>
          <input
            type='email'
            required
            id='email'
            placeholder='Email address'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            required
            id='createPassword'
            placeholder='Create Password'
            name='createPassword'
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
          />
          <input
            type='password'
            required
            id='confirmPassword'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>
            By signing up, you confirm that you’ve read and accepted our Term of
            use and Privacy Policy
          </p>
          <button>
              Register
          </button>
          <NavLink to='/sign-in' className='link'>
            Already have an account? Log in
          </NavLink>
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
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 40%;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px 20px;
  }
  input {
    width: 400px;
    height: 60px;
    margin: 15px;
    padding: 12px 16px;
    font-family: inherit;
    padding-left: 20px;
    border-radius: 8px;
    background: #f5f0ff;
    outline: none;
    border: none;
  }
  .link,
  p {
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    width: 350px;
    margin: 10px 0;
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
    margin: 25px 0;
    font-size: 15px;
    padding: 12px 16px;
    text-decoration: none;
    text-align: center;
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
    input {
      width: 300px;
    }
    button {
      width: 310px;
    }
    p {
      width: 250px;
    }
    .register-page{
      height: 120vh;
    }
    form {
      height: 100vh;
    }
  }
  @media screen and (max-width: 370px) {
    input {
      width: 280px;
    }
    button {
      width: 280px;
    }
    h1 {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 320px) {
    form {
      height: 120vh;
      width: 100%;
    }
  }
`
export default RegisterPage