import { Link } from "react-router-dom"
import styled from "styled-components"
import { StyledLink } from "../../utils/Atoms"
import LogoHeader from "../../assets/LOGO.png"

const HomeLogo = styled.img`
  width: 210px;
  height: 68px;
  margin-right: auto;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RightAlignContainer = styled.div`
  margin-left: auto;
`

function Header() {
  return (
    <NavContainer>
      <Link>
        <HomeLogo src={LogoHeader} />
      </Link>
      <RightAlignContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/">A propos</StyledLink>
      </RightAlignContainer>
    </NavContainer>
  )
}

export default Header
