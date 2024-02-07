import React from "react"
import { Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
const GlobalStyle = createGlobalStyle`
  div {
    font-family:  'Montserrat', sans-serif;
  }

  body {
    margin: 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
