import React, { useState } from 'react'
import styled from 'styled-components'
import { Sling as Hamburger } from 'hamburger-react'
import logo from '../assets/Frame 1150.png'

const Navbar = () => {
    const [active, setActive] = useState(false)
    const closeNav = ()=>{
        setActive(!active)
    }
  return (
    <>
      <Wrapper>
        <nav>
          <div className='desktop-nav'>
            <div className='logo'>
              <img src={logo} alt='commercefy' />
            </div>
            <ul className='pages'>
              <li>Home</li>
              <li>FAQ</li>
              <li>About Us</li>
            </ul>
            <ul className='pages users'>
              <li>Login</li>
              <li className='register'>Register</li>
            </ul>
          </div>

        <div className={active ? 'mobile-view' : 'null'}>
            <div className='mobile-nav'>
              <img src={logo} alt='Homely Logo' onClick={closeNav} />
              <div className='nav-btn'>
                <Hamburger
                  toggled={active}
                  toggle={setActive}
                  easing='ease-in'
                  size={20}
                  direction='left'
                />
              </div>
            </div>
            {/* Mobile Navigation */}
            <div>
              {active && (
                <div className='mobile'>
                  <ul className='mobile-pages'>
                    <li onClick={closeNav}>Home</li>
                    <li onClick={closeNav}>FAQ</li>
                    <li onClick={closeNav}>About Us</li>
                  </ul>
                  <ul className='mobile-pages users'>
                    <li onClick={closeNav}>Login</li>
                    <li onClick={closeNav} className='register'>
                      Register
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  nav {
    position: relative;
    width: 100%;
  }
  .desktop-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
  }
  .pages {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    list-style: none;
    padding: 0 20px;
    cursor: pointer;
  }
  .register {
    background-color: #4f378b;
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
  }
  .null,
  .mobile-view {
    display: none;
  }
  @media screen and (max-width: 900px) {
    .mobile-view {
      display: flex;
      flex-direction: column;
      position: fixed;
      z-index: 10;
      background-color: #fff;
      height: 100vh;
      width: 100%;
    }
    .null{
        display: block;
    }
    .desktop-nav {
      display: none;
    }
    .mobile-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 50px;
    }
    .mobile{
        margin-top: 70px;
    }
    .mobile-pages {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    li {
      margin: 20px 0;
    }
  }
`

export default Navbar
