import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import MainPage from './MainPage'
import CatchADog from './CatchADog'
import Genres from './Genres'
import TopTen from './TopTen'
import AboutUs from './About'

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="genres" element={<Genres />} />
          <Route path="top-ten" element={<TopTen />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="dogs-api" element={<CatchADog />} />
        </Route>
      </Routes>
    </HashRouter> 
    </>
  )
}
export default App;
