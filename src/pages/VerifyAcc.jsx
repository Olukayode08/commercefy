import React from 'react'
import styled from 'styled-components'

const VerifyAcc = () => {
  return (
    <>
      <Wrapper>
        <div className='verify-page'>
          <div className='verify'>
            <h1>Verify your account</h1>
            <p>
              Enter the OTP sent to your E-mail address to verify your account
            </p>
            <h5>Request New OTP in 00:30</h5>
          </div>
          <div className='input-btn'>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .verify-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
    background-color: #fff;
    color: #000;
  }
  .verify {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 20px;
    line-height: 36px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    margin: 15px 0;
    width: 300px;
    text-align: center;
  }
  h5 {
    color: #4f378b;
    font-size: 14px;
    line-height: 16px;
  }
  .input-btn {
    margin-top: 40px;
  }
  input {
    margin: 6px;
    width: 25px;
    height: 25px;
    text-align: center;
  }
`
export default VerifyAcc
