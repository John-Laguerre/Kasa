import React, { useState, useEffect } from "react"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { getHousings } from "../../datas/Api"
import "./Home.scss"

const Home = () => {
  const [housings, setHousings] = useState([])

  useEffect(() => {
    setHousings(getHousings())
  }, [])

  return (
    <>
      <Banner />
      <div className="card-container">
        {housings.map((housing) => (
          <Card
            key={housing.id}
            title={housing.title}
            imageUrl={housing.cover}
          />
        ))}
      </div>
    </>
  )
}

export default Home
