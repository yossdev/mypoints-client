import Header from '../../UI/organisms/Header'
import Banner from '../../UI/organisms/Banner'
import ApaItuMyPoints from '../../UI/organisms/ApaItuMyPoints'
import CaraDapatPoints from '../../UI/organisms/CaraDapatPoints'
import DaftarPertanyaan from '../../UI/organisms/DaftarPertanyaan'
import Footer from '../../UI/organisms/Footer'

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
