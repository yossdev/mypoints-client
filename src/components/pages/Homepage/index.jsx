import Header from '../../UI/organisms/Homepage/Header'
import Banner from '../../UI/organisms/Homepage/Banner'
import ApaItuMyPoints from '../../UI/organisms/Homepage/ApaItuMyPoints'
import CaraDapatPoints from '../../UI/organisms/Homepage/CaraDapatPoints'
import DaftarPertanyaan from '../../UI/organisms/Homepage/DaftarPertanyaan'
import Footer from '../../UI/organisms/Homepage/Footer'

const Homepage = () => {
  document.title = 'MyPoints'

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
