import { Link } from "react-router-dom"
import styled from "styled-components"
import Colors from "./styled/Colors"

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  color: ${Colors.primaryRed};
`
