import { RiHomeSmileFill as HomeIcon } from 'react-icons/ri'
import { Profile } from '.'
import styled from 'styled-components'

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
      <Content>{children}</Content>
      <Footer>
        <a href="/contact">Get in contact</a>
      </Footer>
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
  transition: all 0.4s ease;
  @media (max-width: 950px) {
    width: 50px;
    min-width: 50px;
    background: ${({ theme }) => theme.palette.darkest};
  }
`

const Home = styled.a`
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

  @media (max-width: 950px) {
    opacity: 0;
  }
`

const Content = styled.div`
  height: 30%;
  position: relative;
  @media (max-width: 950px) {
    opacity: 0;
  }
`

const Footer = styled.footer`
  @media (max-width: 950px) {
    opacity: 0;
  }
`
