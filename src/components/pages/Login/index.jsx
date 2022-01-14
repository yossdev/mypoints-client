import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import logo from '../../../assets/logo.svg'
import agent from '../../../assets/agent.svg'

import { isAuthenticated, storeJwt } from '../../../store/slice'
import { useDispatch } from 'react-redux'
import { store } from '../../../store/store'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'

const api = 'https://server.mypoints.site/api/v1/login'

const Login = () => {
  document.title = 'Login'

  const payload = {
    email: '',
    password: '',
  }

  const [reqBody, setReqBody] = useState(payload)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    setReqBody({
      ...reqBody,
      [e.target.name]: value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post(api, reqBody)
      .then((response) => {
        // dispatch redux untuk simpan jwt access token saat berhasil login
        const accessToken = response.data.data.access_token
        dispatch(storeJwt(accessToken))
        dispatch(isAuthenticated(true))
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const s = store.getState()
  let navigate = useNavigate()
  let location = useLocation()

  let from = location.state?.from?.pathname || '/dashboard'

  // for redirect after successful login, using useEffect is not the best approach but it works for now
  useEffect(() => {
    if (!loading && s.store.isAuthenticated) {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true })
    }
  })

  if (loading) return <MainLoading />

  return (
    <div className="flex items-center">
      <div className="mx-auto w-1/4 font-roboto space-y-6 bg-white shadow-lg border border-purple rounded-lg px-5 pb-8">
        <form method="post" className="space-y-6" onSubmit={handleLogin}>
          <img className="mx-auto" alt="logo ungu" src={logo} width={175} />
          <h3 className="text-xl text-center font-medium text-purple">
            Selamat Datang Para Agen
          </h3>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-purple block mb-2"
            >
              e-mail
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-purple block mb-2"
            >
              password
            </label>

            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          {error && (
            <div className="text-sm text-center text-red italic">
              Email atau Password salah, silahkan coba lagi!
            </div>
          )}

          <button
            type="submit"
            className="w-full text-white bg-purple hover:bg-darkpurple focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>

      <div className="w-1/2 h-screen bg-purple items-center">
        <img
          className="flex mx-auto mt-40"
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
