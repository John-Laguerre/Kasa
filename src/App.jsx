import React from "react"
import { Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Housing from "./pages/Housing/housing"

const GlobalStyle = createGlobalStyle`
  div {
    font-family:  'Montserrat', sans-serif;
  }

  body {
    margin: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Housing/:houseNumber" element={<Housing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
