import Header from '../UI/organisms/Header'
import Banner from '../UI/organisms/Banner'
import ApaItuMyPoints from '../UI/organisms/ApaItuMyPoints'

const Homepage = () => {
  document.title = 'MyPoints'

  return (
    <>
      <Header />
      <Banner />
      <ApaItuMyPoints />
    </>
  )
}

export default Homepage
