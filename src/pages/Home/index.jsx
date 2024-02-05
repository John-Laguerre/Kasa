import React from "react"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { getHousings } from "../../datas/Api"

function Home() {
  const housings = getHousings()

  return (
    <>
      <Banner />
      <div className="card-container">
        {housings.map((house) => (
          <Card key={house.id} />
        ))}
      </div>
    </>
  )
}

export default Home
