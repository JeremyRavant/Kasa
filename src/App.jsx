import React from 'react'
import Navbar from '../components/Navbar'
import "./App.css"
import Banner from '../components/Banner'
import AppartmentList from '../components/AppartmentList'
import Main from '../components/Main'
import Footer from '../components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <AppartmentList />
      </Main>
      <Footer />
    </div>
  )
}

export default App