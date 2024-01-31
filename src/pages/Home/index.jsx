import styled from "styled-components"

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ;
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
`

function Home() {
  return (
    <HomeWrapper>
      <HomerContainer></HomerContainer>
    </HomeWrapper>
  )
}

export default Home
