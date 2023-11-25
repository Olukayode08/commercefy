import React from 'react'
import styled from 'styled-components'
import bg from '../assets/man.png'
const Hero = () => {
  return (
    <>
      <Wrapper>
        <div>
          <div className='bg-image'></div>
          <div className='content'>
            <div className='content-heading'>
              <h1>
                Elevate your business with <br /> our streamlined platform.
              </h1>
              <p>Effortless Invoicing and Seamless Payments</p>
            </div>
            <h5>Start Exploring</h5>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .bg-image {
    position: relative;
    width: 100%;
    height: 90vh;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
  }
  .bg-image::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.01);
  }
  .content {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .content-heading {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 80px;
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 45px;
    color: #252525;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    color: #252525;
  }
  h5 {
    padding: 10px 0;
    background-color: #fff;
    max-width: 170px;
    font-size: 17px;
    color: #252525;
    margin: 0 auto;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    .content {
      width: 80%;
    }
    h1 {
      font-size: 35px;
      line-height: 45px;
    }
    br {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }

  }
`
export default Hero
