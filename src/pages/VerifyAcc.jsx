import React from 'react'
import styled from 'styled-components'

const VerifyAcc = () => {
  return (
    <>
      <Wrapper>
        <div className='verify-page'>
          <div>
            <h1>Verify your account</h1>
            <p>
              Enter the OTP sent to your mail address to verify your account
            </p>
            <h5>Request New OTP in 00:30</h5>
          </div>
          <div>
            <input type='radio' />
            <input type='radio' />
            <input type='radio' />
            <input type='radio' />
            <input type='radio' />
            <input type='radio' />
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
    height: 100vh;
    background-color: #fff;
    color: #000;
  }
`
export default VerifyAcc
