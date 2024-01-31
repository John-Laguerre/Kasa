import styled from "styled-components"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: #f9f9fc;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
const CardTitle = styled.span``

function Card({ title }) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

export default Card
