import { useState } from 'react'

import Header from '../../UI/organisms/Homepage/Header'
import Banner from '../../UI/organisms/Homepage/Banner'
import ApaItuMyPoints from '../../UI/organisms/Homepage/ApaItuMyPoints'
import CaraDapatPoints from '../../UI/organisms/Homepage/CaraDapatPoints'
import DaftarPertanyaan from '../../UI/organisms/Homepage/DaftarPertanyaan'
import Footer from '../../UI/organisms/Homepage/Footer'

import Loading from '../../UI/atoms/Loading'
import Error from '../../pages/Error'

const Homepage = () => {
  document.title = 'MyPoints'

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      <Header />
      <Banner />
      <ApaItuMyPoints />
      <CaraDapatPoints />
      <DaftarPertanyaan />
      <Footer />
    </>
  )
}

export default Homepage
