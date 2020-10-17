import React from 'react'
import { RiHomeSmileFill as HomeIcon } from 'react-icons/ri'
import { Link } from 'gatsby'
import { Profile } from '.'
import styled from '@emotion/styled'

export const Sidebar = ({ children }) => {
  return (
    <Nav>
      <Home>
        <HomeIcon size={20} />
      </Home>
      <ProfileContainer href="https://c.sinclair.software">
        <Profile />
        <h4>Conor Sinclair</h4>
        <p>A Software Developer of high esteem</p>
      </ProfileContainer>
      <Content>
        {children}
      </Content>
      <footer>
        <Link to="/contact/">Get in contact</Link>
      </footer>
    </Nav>
  )
}

const Nav = styled.nav`
  width: 30vw;
  min-width: 250px;
  height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.primary};
`

const Home = styled(Link)`
  cursor: pointer;
`

const ProfileContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: #fff;
  }

  p {
    background: ${({ theme }) => theme.palette.dark};
    padding: 10px;
    border-radius: 2px;
    font-size: 0.7em;
  }
`

const Content = styled.div`
  height: 30%;
  position: relative;
`