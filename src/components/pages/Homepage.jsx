import Header from '../UI/organisms/Header'
import Banner from '../UI/organisms/Banner'
import ApaItuMyPoints from '../UI/organisms/ApaItuMyPoints'
import CaraDapatPoints from '../UI/organisms/CaraDapatPoints'

const Homepage = () => {
  document.title = 'MyPoints'

  return (
    <>
      <Header />
      <Banner />
      <ApaItuMyPoints />
      <CaraDapatPoints />
    </>
  )
}

export default Homepage
