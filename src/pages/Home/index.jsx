<<<<<<< HEAD
import React from "react"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { getHousings } from "../../datas/Api"

function Home() {
  const housings = getHousings()
=======
import React, { useState, useEffect } from "react"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import { getHousings } from "../../datas/Api"
import "./Home.scss"

function Home() {
  const [housings, setHousings] = useState([])

  useEffect(() => {
    setHousings(getHousings())
  }, [])
>>>>>>> de474ea (Mise à jour)

  return (
    <>
      <Banner />
      <div className="card-container">
<<<<<<< HEAD
        {housings.map((house) => (
          <Card key={house.id} />
=======
        {housings.slice(0, 6).map((housing) => (
          <Card
            key={housing.id}
            title={housing.title}
            imageUrl={housing.cover}
          />
>>>>>>> de474ea (Mise à jour)
        ))}
      </div>
    </>
  )
}

export default Home
