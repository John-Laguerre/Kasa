import React from "react"
import { Routes, Route } from "react-router-dom"
<<<<<<< HEAD
=======
import { createGlobalStyle } from "styled-components"
>>>>>>> de474ea (Mise à jour)
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import Header from "./components/Header"
import Footer from "./components/Footer"

<<<<<<< HEAD
function App() {
  return (
    <>
=======
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
>>>>>>> de474ea (Mise à jour)
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
