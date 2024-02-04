import React from "react"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { housingData } from "../../datas/housing"

function Home() {
  return (
    <>
      <Banner />
      <div className="card-container">
        {housingData.map((house) => (
          <Card key={house.id} />
        ))}
      </div>
    </>
  )
}

export default Home
