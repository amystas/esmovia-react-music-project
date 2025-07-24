import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
// import MainPage from './MainPage'
// import CatchADog from './CatchADog'
// import AboutUs from './AboutUs'
// import TopTen from './TopTen'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<MainPage />} />
          <Route path="genres" element={<Genres />} />
          <Route path="top-ten" element={<TopTen />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="dogs-api" element={<CatchADog />} /> */}
        </Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App;
