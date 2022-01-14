import { ReactComponent as Art404 } from '../../../assets/art404.svg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  document.title = '404 | Page Not Found'

  const navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="container mx-auto h-screen pt-20">
      <div className="grid justify-center items-center">
        <Art404 />

        <p className="text-9xl font-bold text-center">404</p>

        <p className="text-center text-xl font-medium my-10">
          Looks like your're lost, <br />
          Let's get you back on track
        </p>
        <div className="grid justify-center">
          <button
            type="button"
            onClick={handleOK}
            className="text-white bg-purple hover:bg-darkpurple font-semibold px-6 py-1.5 rounded-md mr-6"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
