import React from "react"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import "./Home.css"
import housing from "../../datas/housing.json"

const Home = () => {
  return (
    <>
      <Banner />
      <div className="card-container">
        {housing.map((housing) => (
          <Card
            key={housing.id}
            id={housing.id}
            title={housing.title}
            imageUrl={housing.cover}
          />
        ))}
      </div>
    </>
  )
}

export default Home
