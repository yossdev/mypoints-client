import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  document.title = '404 | Page Not Found'

  const navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  return (
    <div class="bg-gradient-to-r from-purple-300 to-blue-200">
      <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div class="border-t border-gray-200 text-center pt-8">
            <h1 class="text-9xl font-bold text-purple-400">404</h1>
            <h1 class="text-6xl font-medium py-8">Oops! Page not found</h1>
            <p class="text-2xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist.
            </p>
            <button
              class="text-white bg-purple hover:bg-darkpurple font-semibold px-6 py-1.5 rounded-md mr-6"
              onClick={handleOK}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
