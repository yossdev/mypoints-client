import logo from '../../../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const PageError = () => {
  const navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="w-4/5 float-right flex items-center justify-center min-h-screen bg-grey">
      <section className="text-center mx-auto lg:w-2/3">
        <img className="m-auto w-24 lg:w-48" src={logo} alt="logo" />
        <h1 className="mt-2 mb-1 text-2xl lg:text-3xl font-poppins">
          Sorry something went wrong.
        </h1>
        <div className="font-roboto">
          <p>Sorry for the inconvenience. Our team already on the matter.</p>
          <p className="mt-4 py-5">MyPoints Team</p>
          <button
            className="text-white bg-purple hover:bg-darkpurple font-semibold px-6 py-1.5 rounded-md"
            onClick={handleOK}
          >
            OK
          </button>
        </div>
      </section>
    </div>
  )
}

export default PageError
