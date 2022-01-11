import Header from '../../UI/organisms/Landingpage/Header'
import Banner from '../../UI/organisms/Landingpage/Banner'
import ApaItuMyPoints from '../../UI/organisms/Landingpage/ApaItuMyPoints'
import CaraDapatPoints from '../../UI/organisms/Landingpage/CaraDapatPoints'
import FAQ from '../../UI/organisms/Landingpage/FAQ'
import Footer from '../../UI/organisms/Landingpage/Footer'

const Homepage = () => {
  document.title = 'MyPoints'

  return (
    <>
      <Header />
      <Banner />
      <ApaItuMyPoints />
      <CaraDapatPoints />
      <FAQ />
      <Footer />
    </>
  )
}

export default Homepage
