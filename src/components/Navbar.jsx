import React, { useState } from 'react'
import styled from 'styled-components'
import { Sling as Hamburger } from 'hamburger-react'
import logo from '../assets/commercefy.jpg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const closeNav = () => {
    setActive(!active)
  }
  return (
    <>
      <Wrapper>
        <nav>
          <div className='desktop-nav'>
            <img src={logo} alt='commercefy' />
            <ul className='pages'>
              <li>
                <NavLink to='/' className='link'>
                  Home
                </NavLink>
              </li>
              <li>FAQ</li>
              <li>About Us</li>
            </ul>
            <ul className='pages users'>
              <li>
                <NavLink to='/sign-in' className='links'>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to='/sign-up' className='register links'>
                  Register
                </NavLink>
              </li>
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
                    <li>
                      <NavLink onClick={closeNav} to='/' className='link'>
                        Home
                      </NavLink>
                    </li>
                    <li onClick={closeNav}>FAQ</li>
                    <li onClick={closeNav}>About Us</li>
                  </ul>
                  <ul className='mobile-pages users'>
                    <li>
                      <NavLink
                        onClick={closeNav}
                        to='/sign-in'
                        className='links'
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={closeNav}
                        to='/sign-up'
                        className='register links'
                      >
                        Register
                      </NavLink>
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
  .link {
    text-decoration: none;
    color: #252525;
    padding: 0 20px;
  }
  .links {
    text-decoration: none;
    color: #4f378b;
    padding: 0 30px;
  }
  .register {
    background-color: #4f378b;
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
  }

  img {
    width: 13%;
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
    .null {
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
    .mobile {
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
  @media screen and (max-width: 600px) {
    img {
      width: 45%;
    }
  }
`

export default Navbar
