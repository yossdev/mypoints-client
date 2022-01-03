import logo from '../UI/atoms/logo.svg'
import agent from '../UI/atoms/agent.svg'

const Login = () => {
  document.title = 'Login'

  return (
    <div className="flex items-center">
      <div className="mx-auto w-1/4 font-roboto space-y-6 bg-white shadow-lg border border-purple rounded-lg px-5 pb-8">
        <form className="space-y-6" action="#">
          <img className="mx-auto" alt="logo ungu" src={logo} width={175} />

          <h3 className="text-xl text-center font-medium text-purple">
            Selamat Datang Para Agen
          </h3>

          <div>
            <label
              for="email"
              className="text-sm font-medium text-purple block mb-2"
            >
              e-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label
              for="password"
              className="text-sm font-medium text-purple block mb-2"
            >
              password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-purple hover:bg-darkpurple focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>

      <div class="w-1/2 h-screen bg-purple items-center">
        <img
          className="flex mx-auto mt-16"
          alt="banner agent"
          src={agent}
          width={350}
        />
        <h1 className="mt-6 text-center text-4xl font-bold leading-tight text-white font-poppins">
          Jual produknya, <br />
          Kumpulkan poinnya, <br />
          Dapatkan hadiahnya!!
        </h1>
      </div>
    </div>
  )
}

export default Login
