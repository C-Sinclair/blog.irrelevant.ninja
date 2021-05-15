import styled from 'styled-components'
import SvgMe from '../images/conor.svg'

export const Profile = () => {
  return <Conor />
}

const Conor = styled(SvgMe)`
  border-radius: 100px;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border: 3px solid ${({ theme }) => theme.palette.gold};
`
