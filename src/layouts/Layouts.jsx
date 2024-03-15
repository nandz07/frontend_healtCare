import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Routers from '../routes/Routers'

function Layouts() {
  return (
    <>
    <Header />
    <main>
      <Routers />
    </main>
    <Footer />
    </>
  )
}

export default Layouts